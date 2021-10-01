import React from 'react'
import logoMcdonalds from '../../images/logo-mcdonalds.svg'
import logoStarbucks from '../../images/logo-starbucks.svg'
import logoLego from '../../images/logo-lego.svg'
import './Home.scss'

const Home = () => {
    return (
        <div className="home-page">
            <div className="page-header">
                <div className="container">
                    Dashboard
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    <div className="your-top-brands">
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
                    </div>

                    <div className="recent-transactions">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home