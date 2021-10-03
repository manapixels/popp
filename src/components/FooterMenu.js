import React from 'react'
import { NavLink } from 'react-router-dom'
import './FooterMenu.scss'

const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <NavLink exact to="/">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M0,0H40V40H0Z" fill="rgba(0,0,0,0)" /><path className="inner" d="M4.583,18.834h9.5a1.588,1.588,0,0,0,1.583-1.583V4.583A1.588,1.588,0,0,0,14.084,3h-9.5A1.588,1.588,0,0,0,3,4.583V17.25A1.588,1.588,0,0,0,4.583,18.834Zm0,12.667h9.5a1.588,1.588,0,0,0,1.583-1.583V23.584A1.588,1.588,0,0,0,14.084,22h-9.5A1.588,1.588,0,0,0,3,23.584v6.334A1.588,1.588,0,0,0,4.583,31.5Zm15.834,0h9.5A1.588,1.588,0,0,0,31.5,29.917V17.25a1.588,1.588,0,0,0-1.583-1.583h-9.5a1.588,1.588,0,0,0-1.583,1.583V29.917A1.588,1.588,0,0,0,20.417,31.5ZM18.834,4.583v6.334A1.588,1.588,0,0,0,20.417,12.5h9.5A1.588,1.588,0,0,0,31.5,10.917V4.583A1.588,1.588,0,0,0,29.917,3h-9.5A1.588,1.588,0,0,0,18.834,4.583Z" transform="translate(2.75 2.75)" fill="#fff" stroke="#707070" stroke-width="1" /></svg>
                </div>
                <div className="name">Home</div>
            </NavLink>
            <NavLink to="/explore">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M0,0H40V40H0Z" fill="none" /><path className="inner" d="M18.689,16.853a1.836,1.836,0,1,0,1.836,1.836A1.83,1.83,0,0,0,18.689,16.853ZM18.689,2A16.689,16.689,0,1,0,35.377,18.689,16.695,16.695,0,0,0,18.689,2Zm3.655,20.343L8.675,28.7l6.358-13.668L28.7,8.675Z" transform="translate(1.311 1.311)" fill="#fff" stroke="#707070" stroke-width="1" /></svg>
                </div>
                <div className="name">Explore</div>
            </NavLink>
            <NavLink to="/order">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M0,0H40V40H0Z" fill="none" /><path className="inner" d="M32.039,4H5.338A3.315,3.315,0,0,0,2.017,7.344L2,27.41a3.329,3.329,0,0,0,3.338,3.344h26.7a3.329,3.329,0,0,0,3.338-3.344V7.344A3.329,3.329,0,0,0,32.039,4ZM30.371,27.41H7.007a1.675,1.675,0,0,1-1.669-1.672V17.377h26.7v8.361A1.675,1.675,0,0,1,30.371,27.41Zm1.669-16.721H5.338V7.344h26.7Z" transform="translate(1.311 2.623)" fill="#fff" stroke="#707070" stroke-width="1" /></svg>
                </div>
                <div className="name">Order</div>
            </NavLink>
            <NavLink to="/stamps">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g transform="translate(0.473)"><rect width="40" height="40" transform="translate(-0.473)" fill="none" /><path className="inner" d="M15.458,19.8l1.788-1.358,1.772,1.341a.83.83,0,0,0,1.291-.911l-.7-2.252L21.6,15.047a.819.819,0,0,0-.53-1.457H18.752l-.712-2.219a.827.827,0,0,0-1.573,0l-.729,2.219H13.4a.828.828,0,0,0-.513,1.474l1.97,1.573-.7,2.252A.83.83,0,0,0,15.458,19.8ZM7.311,34.469A1.667,1.667,0,0,0,9.5,36.042l7.749-2.583,7.749,2.583a1.652,1.652,0,0,0,2.186-1.573V23.988a13.246,13.246,0,1,0-19.869,0ZM17.246,5.311a9.934,9.934,0,1,1-9.934,9.934A9.942,9.942,0,0,1,17.246,5.311Z" transform="translate(2.623 1.311)" fill="#fff" stroke="#707070" stroke-width="1" /></g></svg>
                </div>
                <div className="name">Stamps</div>
            </NavLink>
        </div>
    )
}

export default FooterMenu