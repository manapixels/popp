<p align='center'>
    <img src='./src/images/logo-popp.png' width=600/>
</p>

## POPP

POPP unifies rewards and loyalty programs on Polygon.

Every transaction on POPP mints a Proof-of-Purchase, which, for simplicity and associability, is called a Stamp. Stamps allows users to redeem rewards on a unified platform, through promotion campaigns with merchants or affiliated partners. 

## Inspiration

Pain points:

- Brands often have their own isolated apps for rewards. Users have to manage multiple reward systems. Brands have to build up their own reward system capabilities.
- Since rewards are isolated, they can't be traded for cash or into other rewards
- Non-physical reward systems require memberships. This requires users to register with their name, email address, and phone number to start collecting rewards.

## Features

- Purchase items using crypto; ordering and payment system
- View and trade collected stamps on an open market like OpenSea
- Redeem rewards
- Cross-brand collaboration campaigns between merchants
- Collect-them-all stamps for fun, social sharing

## Technologies used

- **Solidity**: Contract of the Proof-of-Purchase Protocol can be found in [/contracts](./contracts)
    - Brand factory + brand contract to
        - manage mintable items (create, edit, delist items)
        - purchase and mint
        - create campaign contracts
    - Campaign contract
        - redemption of rewards
    - Mintable item contract
        - mint, burn
- **Chainlink & Umbrella Network**: get price feeds for accurate exchange rates to brand owner's currency of choice

## How to run

Define the following env variables

<pre>
    REACT_APP_UMBRELLA_API_KEY
    REACT_APP_UMBRELLA_API_URL
    REACT_APP_UMBRELLA_REGISTRY_CONTRACT_ADDRESS
    REACT_APP_BLOCKCHAIN_PROVIDER_URL
</pre>

To start the app:

### `yarn start`

## Future work

1) Programmable rewards systems & stamps with custom rules
    - Upgradable Stamps: Tier 1 Stamps can be upgraded for Tier 2 tokens, etc. 
    - Loyalty Stamps: Minted upon reaching significant milestones, qualifying Wallet Holder to a "buff" (e.g., discounts, VIP access)
    - Fragmentable Stamps: Bundled products represented by a stamp which can be broken into individual stamps, e.g. a Meal Stamp can be broken up into its components (1x burger, 1x fries, 1x beverage).
    - Limited Edition Stamps: Limited edition Stamps(seasonal, etc.)
Stamps of Varying Rarities: Rare designs of Stamps may be collected for fun

2) Marketplace for Stamp trading
Development of a POPP-specific marketplace, or building on OpenSea. 

3) Brand verification
Confirm identity of vendors (large brands, cross-branch collaboration)

4) Community-driven Stamp designs
Designs follow brand & product theme.


