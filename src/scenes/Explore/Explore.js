import React from 'react'
import Map from './components/Map'
import logoMcdonalds from '../../images/logo-mcdonalds.svg'
import logoStarbucks from '../../images/logo-starbucks.svg'
import logoLego from '../../images/logo-lego.svg'
import './Explore.scss'

const Explore = () => {
    return (
        <div className="explore-page">
            <div className="page-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="title d-inline-block">Explore</div>
                        <div>
                            <button className="btn" style={{ marginRight: '.7rem'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" strokelinecap="round" strokelinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                                </svg>
                            </button>
                            <button className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
            <div className="tabs">
                <div className="container">
                <div className="tab-item active">All</div>
                <div className="tab-item">Food</div>
                <div className="tab-item">Groceries</div>
                <div className="tab-item">Retail</div>
                <div className="tab-item">Fitness</div>
                <div className="tab-item">Services</div>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    
                    <div className="merchant-list">
                        <div className="merchant">
                            <div className="d-flex">
                                <img src={logoMcdonalds} className="logo" alt="McDonald's" />
                                <div className="details">
                                    <div className="name">McDonalds</div>
                                    <div className="location">Junction 8, #01-20</div>
                                    <div className="rewards">8 Rewards</div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="pay">
                                    <button className="btn btn-success">PAY</button>
                                </div>
                                <div className="expand">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="#000000" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M18 15l-6 -6l-6 6h12" transform="rotate(180 12 12)" />
                                </svg>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore