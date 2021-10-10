import React from 'react'
import { NavLink } from 'react-router-dom'
import './FooterMenu.scss'

const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <NavLink exact to="/">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline className="line" points="5 12 3 12 12 3 21 12 19 12" />
                        <path className="line" d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path className="line" d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                </div>
                <div className="name">Home</div>
            </NavLink>
            <NavLink to="/explore">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline className="line" points="8 16 10 10 16 8 14 14 8 16" />
                        <circle className="line" cx="12" cy="12" r="9" />
                        <line className="line" x1="12" y1="3" x2="12" y2="5" />
                        <line className="line" x1="12" y1="19" x2="12" y2="21" />
                        <line className="line" x1="3" y1="12" x2="5" y2="12" />
                        <line className="line" x1="19" y1="12" x2="21" y2="12" />
                    </svg>
                </div>
                <div className="name">Explore</div>
            </NavLink>
            <NavLink to="/stamps">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gift" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect className="line" x="3" y="8" width="18" height="4" rx="1" />
                        <line className="line" x1="12" y1="8" x2="12" y2="21" />
                        <path className="line" d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                        <path className="line" d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                    </svg>
                </div>
                <div className="name">Stamps</div>
            </NavLink>
            <NavLink to="/pay">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path className="line" d="M4 7v-1a2 2 0 0 1 2 -2h2" />
                        <path className="line" d="M4 17v1a2 2 0 0 0 2 2h2" />
                        <path className="line" d="M16 4h2a2 2 0 0 1 2 2v1" />
                        <path className="line" d="M16 20h2a2 2 0 0 0 2 -2v-1" />
                        <rect className="line" x="5" y="11" width="1" height="2" />
                        <line className="line" x1="10" y1="11" x2="10" y2="13" />
                        <rect className="line" x="14" y="11" width="1" height="2" />
                        <line className="line" x1="19" y1="11" x2="19" y2="13" />
                    </svg>
                </div>
                <div className="name">Scan &amp; Pay</div>
            </NavLink>
        </div>
    )
}

export default FooterMenu