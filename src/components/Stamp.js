import React from 'react'
import Tippy from '@tippyjs/react'
import './Stamp.scss'

const Stamp = ({ active = false, symbol, name }) => {
    return (
        <Tippy content={name}>
            <div className="stamp-container">
                <div className={`stamp ${active ? 'active' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-star" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" className="inside" />
                    </svg>
                    {symbol && <div className="symbol">{symbol}</div>}
                    {/* {name &&
                        <svg viewBox="0 0 50 50" width="100%" height="100%">
                            <defs>
                            <path id="circle"
                                d="
                                M 50, 50
                                m -37, 0
                                a 37,37 0 1,1 74,0
                                a 37,37 0 1,1 -74,0"/>
                            </defs>
                            <text font-size="17">
                            <textPath xlinkHref="#circle">
                                {name}
                            </textPath>
                            </text>
                        </svg>
                        } */}
                </div>
            </div>
        </Tippy>
    )
}

export default Stamp