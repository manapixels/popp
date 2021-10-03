import React from 'react'
import { IconHistory } from '@tabler/icons'
import avatarZy from '../../images/avatar-zy.svg'
import logoMcdonalds from '../../images/logo-mcdonalds.svg'
import logoStarbucks from '../../images/logo-starbucks.svg'
import logoLego from '../../images/logo-lego.svg'
import logoIkea from '../../images/logo-ikea.svg'
import productBigMac from '../../images/product-bigmac.png'
import './Home.scss'

const Home = () => {
    return (
        <div className="home-page">
            <div className="page-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="title d-inline-block">こんにちは!</div>
                        <div className="avatar">
                            <img src={avatarZy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    <section className="your-stats">
                        <div className="stats-list">
                            <div className="stats-list-item">
                                <div className="name">Stamps</div>
                                <div className="description">19,391</div>
                            </div>
                            <div className="stats-list-item">
                                <div className="name">Redemptions</div>
                                <div className="description">15</div>
                            </div>
                            <div className="stats-list-item">
                                <div className="name">Most Purchased</div>
                                <div className="description">Cappucino</div>
                            </div>
                            {/* <div className="stats-list-item">
                                <div className="name">Favourite</div>
                                <div className="description">Food</div>
                            </div> */}
                        </div>
                    </section>

                    <section className="recent-transactions">
                        <div className="section-title-container">
                            <div className="section-title">Recent transactions</div>
                            <button className="btn btn-primary-outline">
                                <IconHistory size="20" /> Tx History
                            </button>
                        </div>
                        <div className="transaction-item">
                            <div className="title">McDonald's</div>
                            <div className="description">
                                <div className="paid">Paid $6.55</div>
                                <div className="divider"></div>
                                <div className="datetime">2 Oct 2:25 pm</div>
                            </div>
                        </div>
                        
                    </section>

                    <section className="your-top-brands">
                        <div className="section-title">Your top brands</div>
                        <div className="brand-items-container">
                            <button className="brand-item">
                                <div className="logo"><img src={logoMcdonalds} alt="McDonald's" /></div>
                                <div className="name">McDonald's</div>
                            </button>
                            <button className="brand-item">
                                <div className="logo"><img src={logoStarbucks} alt="Starbucks" /></div>
                                <div className="name">Starbucks</div>
                            </button>
                            <button className="brand-item">
                                <div className="logo"><img src={logoLego} alt="Lego" /></div>
                                <div className="name">Lego</div>
                            </button>
                            <button className="brand-item">
                                <div className="logo"><img src={logoIkea} alt="Ikea" /></div>
                                <div className="name">Ikea</div>
                            </button>
                        </div>
                    </section>

                    <section className="rewards">
                    <div className="section-title">Reward progress</div>
                        <div className="reward-item">
                            <div className="info-container">
                                <div>
                                    <div className="brand d-inline-block">
                                        <img src={logoMcdonalds} alt="McDonald's" />
                                    </div>
                                    <div className="d-inline-block">
                                        <div className="title">
                                            1x Big Mac Burger
                                        </div>
                                        <div className="period">
                                            Expires 24 Sep 2022
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27.61" height="24.844" viewBox="0 0 27.61 24.844">
                                        <path id="Path_171" data-name="Path 171" d="M257.834,419.99l-10.349,10.25-10.349-10.25m0,0a6.9,6.9,0,1,1,10.349-9.061A6.9,6.9,0,1,1,257.834,420" transform="translate(-233.673 -406.771)" fill="#ff3c49" stroke="#ff3c49" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.75"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="progress">
                                {[...Array(3)].map((i) => (
                                    <div className="stamp-container">
                                        <div className="stamp active" key={i}>
                                            <img src={productBigMac} alt="Big Mac" />
                                            <div className="symbol">BMB</div>
                                        </div>
                                    </div>
                                ))}
                                {[...Array(5)].map((i) => (
                                    <div className="stamp-container">
                                        <div className="stamp">
                                            <img src={productBigMac} alt="Big Mac" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home