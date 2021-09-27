import React from 'react'
import logo from '../../assets/logo.svg'
import TTM from '../../assets/TTM.svg'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footerContainer">
            <img className="logo826" src={logo} />
            <img className="TTM" src={TTM} />
        </div>
    )
}

export default Footer
