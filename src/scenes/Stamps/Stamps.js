import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
import Stamp from '../../components/Stamp'
import logoMcdonalds from '../../images/logo-mcdonalds.svg'
import logoStarbucks from '../../images/logo-starbucks.svg'
import logoLego from '../../images/logo-lego.svg'
import productBigMac from '../../images/product-big-mac.png'
import productMcSpicy from '../../images/product-mcspicy.png'
import './Stamps.scss'

const Stamps = () => {

    const [showClaimableOnly, setShowClaimableOnly] = useState(false)

    return (
        <div className="stamps-page">
            <div className="page-header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="title d-inline-block">Stamps</div>
                        <div className={`d-inline-block show-claimable-only-container ${showClaimableOnly && 'checked'}`}>
                        <Form.Check 
                            type="checkbox"
                            id={`show-claimable-only`}
                            label={`Claimable Only`}
                            value={showClaimableOnly}
                            onChange={(e) => setShowClaimableOnly(e.target.checked)}
                        />
                    </div>
                    </div>
                </div>
            </div>
            <div className="page-body">
                <div className="container">
                    

                    <Accordion className="brand-item">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className="logo"><img src={logoMcdonalds} alt="McDonald's" /></div>
                                <div className="name">McDonald's</div>
                                <Badge pill bg="primary">Claimable</Badge>
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="campaign">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="product-image">
                                            <img src={productMcSpicy} alt="McSpicy Burger" />
                                        </div>
                                        <div>
                                            <div className="name">1x McSpicy Burger</div>
                                            <div className="expiry-date">Expires by 01 Dec 2021</div>
                                        </div>
                                    </div>
                                    <button className="btn btn-block btn-primary mb-3">Claim 1x McSpicy Burger</button>
                                    <div className="stamps-container">
                                        {[...Array(10)].map((i) => (
                                            <Stamp active={true} symbol="MSB" name="McSpicy Burger" key={i} />
                                        ))}
                                    </div>
                                </div>
                                <div className="campaign">
                                    <div className="d-flex align-items-center mb-2">
                                        <div className="product-image">
                                            <img src={productBigMac} alt="Big Mac Burger" />
                                        </div>
                                        <div>
                                            <div className="name">1x Big Mac</div>
                                            <div className="expiry-date">Expires by 01 Dec 2021</div>
                                        </div>
                                    </div>
                                    <div className="stamps-container">
                                        {[...Array(4)].map((i) => (
                                            <Stamp active={true} symbol="BM" name="Big Mac Burger" key={i} />
                                        ))}
                                        {[...Array(6)].map((i) => (
                                            <Stamp active={false} symbol="BM" name="Big Mac Burger" key={i} />
                                        ))}
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className="logo"><img src={logoStarbucks} alt="Starbucks" /></div>
                                <div className="name">Starbucks</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div className="logo"><img src={logoLego} alt="Lego" /></div>
                                <div className="name">Lego</div>
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Stamps