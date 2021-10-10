pragma solidity >=0.6.0 <0.8.4;
//SPDX-License-Identifier: MIT

/// @title Create Proof of Purchases (POP) when buying items from a brand
/// @author zhenyangg

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BrandFactory {
    
    event NewBrandCreated(address _brandContractAddress, address _brandCreator, string brandName, string brandSymbol, string uri);

    constructor() {}
    
    function createNewBrandContract(string memory name, string memory symbol, string memory uri) public {
        Brand _newBrand = new Brand(name, symbol, uri);
        emit NewBrandCreated(address(_newBrand), msg.sender, name, symbol, uri);
    }

}

library SharedStructs {
    struct ItemRequired {
        address tokenAddress;
        uint amount;
    }
}

contract Brand is Ownable {
    
    string public brandSymbol;
    string public brandName;
    string public brandUri;
   
    using Counters for Counters.Counter;
    Counters.Counter private _itemIndexCounter;
    Counters.Counter private _campaignIndexCounter;
    
    // Events
    //
    event AddItemEvent(uint _itemIndex, address _itemAddress);
    event CreateCampaignEvent(uint _campaignIndex, address _campaignAddress);
    event PurchaseAndMintItem(uint _itemId, uint _amount, address _buyer);
    
    // Items in this brand
    //
    mapping(uint => MintableBrandItem) public items;
    struct MintableBrandItem { bool active; MintableItem mintableItem; }
    
    struct PurchaseItem {
        uint itemId;
        uint amount;
    }
    
    /**
    * @dev Constructor
    * @param _symbol       Symbol of brand
    * @param _name         Name of brand
    * @param _uri          URI of brand
    **/
    constructor(string memory _name, string memory _symbol, string memory _uri ) {
        brandSymbol = _symbol;
        brandName = _name;
        brandUri = _uri;
    }
    
    /**
    * @dev Create a new item with a mintable item (if any)
    * @param _symbol        symbol of mintable item
    * @param _name          name of mintable item
    * @param _priceInWei    price of physical item
    **/
    function addItem(string memory _symbol, string memory _name, string memory _uri, uint _priceInWei) public onlyOwner returns (bool) {
        uint256 currIndex = _itemIndexCounter.current();
        MintableItem mintableItem = new MintableItem(this, _symbol, _name, _uri, _priceInWei);
        items[currIndex].mintableItem = mintableItem;
        items[currIndex].active = true;
        _itemIndexCounter.increment();
        
        emit AddItemEvent(currIndex, address(mintableItem));
        return true;
    }
    
    /**
    * @dev Edit item price
    * @param _itemId        id of mintable item
    * @param _priceInWei    price of mintable item
    **/
    function editPrice(uint _itemId, uint _priceInWei) public onlyOwner returns (bool) {
        
        MintableItem mintableItem = items[_itemId].mintableItem;
        require(mintableItem.priceInWei() != _priceInWei, "New price is same as old price");
        mintableItem.setPriceInWei(_priceInWei);
        
        //emit EditItemPriceEvent(currIndex, address(mintableItem), );
        return true;
    }
    
    /**
    * @dev Create Campaign
    * @param _itemsRequired     List of items required to redeem
    * @param _redeemableItem    Name of redeemable item
    **/
    function createCampaign(SharedStructs.ItemRequired[] memory _itemsRequired, string memory _redeemableItem) public onlyOwner returns (bool) {
        Campaign campaign = new Campaign(this, _itemsRequired, _redeemableItem);
    }
    
    /**
    * @dev Purchase a list of items
    * @param _items         List of items to be purchased and minted
    **/
    function purchase(PurchaseItem[] memory _items) public payable {
        uint total = 0;
        for (uint i=0; i<_items.length; i++) {
            MintableItem mintableItem = items[_items[i].itemId].mintableItem;
            total += mintableItem.priceInWei();
        }
        require(total == msg.value, "Please pay the exact amount in ether");
        for (uint i=0; i<_items.length; i++) {
            MintableItem mintableItem = items[_items[i].itemId].mintableItem;
            mintableItem.mint(msg.sender, _items[i].amount, "");
            emit PurchaseAndMintItem(_items[i].itemId, _items[i].amount, msg.sender);
        }
    }
    
    /**
    * @dev When season is over, owner can choose to delist mintable item
    * @param _itemId        index of the item in this brand
    **/
    function delistItem(uint _itemId) public onlyOwner {
        require(items[_itemId].active != false, "Already delisted");
        items[_itemId].active = false;
    }
    
    /**
    * @dev Relist item - Set active to true
    * @param _itemId        index of the item in this brand
    **/
    function relistItem(uint _itemId) public onlyOwner {
        require(items[_itemId].active != true, "Already active");
    }
    
    /**
    * @dev Retrieve mintable item details from its contract
    * @param _itemId        index of the item in this brand
    **/
    function getItem(uint _itemId) public view returns (
        string memory symbol, string memory name, uint priceInWei, address itemAddress
    ) {
        MintableItem item = items[_itemId].mintableItem;
        return (item.symbol(), item.name(), item.priceInWei(), address(item));
    }

}

contract Campaign {
    
    Brand parentContract; // the brand which created this campaign
    
    address[] private itemsRequiredAddresses;
    string redeemableItem;
    
    struct SelectedItem {
        address tokenAddress;
        uint tokenId;
    }
    
    event RedemptionSuccess(address _campaign, address _redeemer);
    
    
    constructor(Brand _parentContract, SharedStructs.ItemRequired[] memory _items, string memory _redeemableItem) {
        parentContract = _parentContract;
        for (uint i=0; i<_items.length; i++) {
            itemsRequiredAddresses.push(_items[i].tokenAddress);
        }
        redeemableItem = _redeemableItem;
    }
    
    /**
    * @dev Redeem NFT items for prize:
    *       User selects the NFTs he want to use for redemption (_userSelectedItems)
    *       User approves all _userSelectedItems to be spent by this campaign contract
    *       The smart contract checks that the msg.sender owns all of the NFTs in _userSelectedItems
    *       Transfer all _userSelectedItems to campaign contract
    *       Emit RedemptionSuccess
    * @param _userSelectedItems     list of NFTs selected by user
    **/
    function redeem(SelectedItem[] memory _userSelectedItems) public payable returns (bool) {

        for (uint i=0; i<itemsRequiredAddresses.length; i++) {
            // require that list of items are sorted by addresses
            require(itemsRequiredAddresses[i] == _userSelectedItems[i].tokenAddress);
            MintableItem mintableItem = MintableItem(address(_userSelectedItems[i].tokenAddress));
            require(mintableItem.ownerOf(_userSelectedItems[i].tokenId) == msg.sender, "You must own all selected items");
            mintableItem.transferFrom(msg.sender, address(this), _userSelectedItems[i].tokenId);
        }

        emit RedemptionSuccess(address(this), msg.sender);
    }
    
}

contract MintableItem is ERC721, ERC721URIStorage {
    
    Brand parentContract;
    string uri;
    uint public priceInWei;
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    modifier onlyParentContract()
    {
        require(msg.sender == address(parentContract));
        _;
    }
    
    constructor(
        Brand _parentContract, 
        string memory _symbol,
        string memory _name, 
        string memory _uri,
        uint _priceInWei
    ) ERC721(_name, _symbol)
    {
        uri = _uri;
        parentContract = _parentContract;
        priceInWei = _priceInWei;
    }
    
    function mint(address _buyer, uint _amount, string memory _uri) public returns (bool)
    {
        for (uint j=0; j<_amount; j++) {
            uint256 currTokenId = _tokenIds.current();
            _mint(_buyer, currTokenId);
            _setTokenURI(currTokenId, _uri);
            _tokenIds.increment();
        }
    }
    
    function setPriceInWei(uint _newPriceInWei) public onlyParentContract
    {
        priceInWei = _newPriceInWei;
    }
    
    /**
     * @dev Override tokenUri() in ERC721
     * @param tokenId Token Id
     **/
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

}