import React from 'react'
import logo from '../../assets/logo.svg'
import TTM from '../../assets/TTM.svg'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footerContainer">
            <a href="https://826la.org/"><img className="logo826" src={logo} /> </a>
            <a href="https://timetravelmart.com/" ><img className="TTM" src={TTM} /> </a>
        </div>
    )
}

export default Footer
