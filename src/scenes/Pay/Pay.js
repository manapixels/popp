import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { ethers } from 'ethers'
import { ContractRegistry, ChainContract, APIClient } from '@umb-network/toolbox'

import logoMcdonalds from '../../images/logo-mcdonalds.svg'
import bigMacMeal from '../../images/product-big-mac-meal.png'
import mcSpicyMeal from '../../images/product-mcspicy-meal.png'
import samuraiMeal from '../../images/product-samurai-meal.png'
import filletOFishMeal from '../../images/product-fillet-o-fish-meal.png'
import mcCrispyMeal from '../../images/product-mccrispy-meal.png'
import aggregatorV3InterfaceABI from '../../abi/aggregatorV3InterfaceABI.json'

import './Pay.scss'

const { 
    REACT_APP_UMBRELLA_API_URL: UMBRELLA_API_URL, 
    REACT_APP_UMBRELLA_API_KEY: UMBRELLA_API_KEY,
    REACT_APP_UMBRELLA_REGISTRY_CONTRACT_ADDRESS: UMBRELLA_REGISTRY_CONTRACT_ADDRESS,
    REACT_APP_BLOCKCHAIN_PROVIDER_URL: BLOCKCHAIN_PROVIDER_URL,
} = process.env

const web3 = new Web3(BLOCKCHAIN_PROVIDER_URL);
const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419");


const Pay = () => {

    const [currETHPrice, setCurrETHPrice] = useState()
    const [currETHPriceUmbrella, setCurrETHPriceUmbrella] = useState()
    const [currProductList, setCurrProductList] = useState([])
    const [selectedProducts, setSelectedProducts] = useState({})
    const [total, setTotal] = useState(0)

    let apiClient = undefined

    useEffect(() => {
        setCurrProductList(exampleProductList)
        priceFeed.methods.latestRoundData().call()
            .then((roundData) => {
                // Do something with roundData
                if (roundData && roundData.answer) {
                    console.log("Chainlink ETH/USD", roundData.answer / Math.pow(10, 8))
                    setCurrETHPrice(roundData.answer / Math.pow(10, 8))
                }
            })
        getUmbrellaPriceData()
        setInterval(getUmbrellaPriceData, 30000) // Get new data every 30 secs
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function setApiClient() {

        const provider = new ethers.providers.JsonRpcProvider(BLOCKCHAIN_PROVIDER_URL)
        const chainContractAddress = new ContractRegistry(provider, UMBRELLA_REGISTRY_CONTRACT_ADDRESS).getAddress('Chain')
        const chainContract = new ChainContract(provider, chainContractAddress)
        apiClient = new APIClient({
            baseURL: UMBRELLA_API_URL,
            chainContract,
            apiKey: UMBRELLA_API_KEY,
        })
    }

    async function getUmbrellaPriceData() {
        if (apiClient === undefined) {
            await setApiClient()
        }
        if (apiClient && BLOCKCHAIN_PROVIDER_URL && UMBRELLA_REGISTRY_CONTRACT_ADDRESS && UMBRELLA_API_KEY) {
            
            const proof = await apiClient.verifyProofForNewestBlock('ETH-USD')
            if (proof.value) {
                console.log("Umbrella ETH/USD", proof.value)
                setCurrETHPriceUmbrella(proof.value)
            }
        }
    
    }

    useEffect(() => {
        if (currProductList && currProductList.length > 0) {
            setSelectedProducts([...Array(currProductList.length)].map(() => 0))
        }
    }, [currProductList])

    useEffect(() => {
        const calculateTotal = () => {
            let _total = 0
            for (let i = 0; i < selectedProducts.length; i++) {
                _total += selectedProducts[i] * currProductList[i].priceInUsd
            }
            setTotal(_total)
        }
        calculateTotal()
    }, [selectedProducts, currProductList])

    const addCount = (productIndex) => {
        let _selectedProducts = selectedProducts.slice(0)
        _selectedProducts[productIndex] += 1
        setSelectedProducts(_selectedProducts)
    }

    const removeCount = (productIndex) => {
        if (selectedProducts[productIndex] > 0) {
            let _selectedProducts = selectedProducts.slice(0)
            _selectedProducts[productIndex] -= 1
            setSelectedProducts(_selectedProducts)
        }
    }

    // const changeCount = (newCount, productIndex) => {
    //     if (newCount >= 0) {
    //         let _selectedProducts = selectedProducts.slice(0)
    //         _selectedProducts[productIndex] = newCount
    //         setSelectedProducts(_selectedProducts)
    //     }
    // }

    return (
        <div className="pay-page">
            <div className="page-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="title d-inline-block">Payment</div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    <div className="store">
                        <div className="store-navigation">
                            <button className="btn btn-outline-gray" style={{ padding: 0 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="5" y1="12" x2="11" y2="18" />
                                    <line x1="5" y1="12" x2="11" y2="6" />
                                </svg>
                            </button>
                            <div className="tabs">
                                <div className="tab-item active">Products</div>
                                <div className="tab-item">New</div>
                            </div>
                        </div>
                        <div className="store-details">
                            <div>
                                <img src={logoMcdonalds} className="store-logo" alt="McDonald's" />
                                <span className="store-name">McDonald's</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--gray-70)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                            </svg>
                        </div>
                        

                        {currProductList.map((p, i) => (
                            <div className="product-item" key={p.name}>
                                <div className="image">
                                    <img src={p.image} alt={p.name} />
                                </div>
                                <div className="details">
                                    <div className="name">{p.name}</div>
                                    <div className="price">
                                        <div className="local-currency">${p.priceInUsd}</div>
                                        {/* <div className="selected-currency-equivalent">{(p.priceInUsd/3500).toFixed(4)} ETH</div> */}
                                    </div>
                                </div>

                                    <div className="amount">
                                        <button className="minus" onClick={() => removeCount(i)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                        <div className="input-amount">{selectedProducts[i]}</div>
                                        {/* <input
                                            type="text"
                                            className="input-amount"
                                            name={i}
                                            value={selectedProducts[i]}
                                            onChange={(e) => changeCount(e.target.value, i)} /> */}
                                        <button className="plus" onClick={() => addCount(i)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <line x1="12" y1="5" x2="12" y2="19" />
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                            </svg>
                                        </button>
                                    </div>

                            </div>
                        ))}
                        
                    </div>
                   
                </div>
                <div className="total-price">
                    <span>Total</span>
                    <div>
                        
                        <span className="priceInUsd">${total}</span>
                    </div>
                    <button className={`btn btn-primary ${total === 0 && 'disabled'}`}>Pay {total !== 0 && (
                            <span className="priceInEth">{(total / (currETHPrice + currETHPriceUmbrella) / 2).toFixed(4)} ETH</span>
                        )}</button>
                </div>
            </div>
        </div>
    )
}

const exampleProductList = [
    {
        name: "Big Mac Burger Meal",
        priceInUsd: 7.7,
        image: bigMacMeal
    },
    {
        name: "McSpicy Burger Meal",
        priceInUsd: 7,
        image: mcSpicyMeal
    },
    {
        name: "Samurai Burger Meal (Chicken)",
        priceInUsd: 8,
        image: samuraiMeal
    },
    {
        name: "Fillet-o-Fish Burger Meal",
        priceInUsd: 6.5,
        image: filletOFishMeal
    },
    {
        name: "Chicken McCrispy Meal",
        priceInUsd: 7.4,
        image: mcCrispyMeal
    }
]

export default Pay