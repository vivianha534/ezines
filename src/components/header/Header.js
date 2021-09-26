import React from 'react'
import TimeTravelMartLogo from '../../assets/timetravelmart.svg'
import menu from '../../assets/menu.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div></div>
            <a href="/#courses">
                <img className='menu' src={menu} />
            </a>
            <a href="/">
                <img src= {TimeTravelMartLogo}/>
            </a>
        </div>
    )
}

export default Header
