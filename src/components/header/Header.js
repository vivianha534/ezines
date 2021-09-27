import React from 'react'
import TimeTravelMartLogo from '../../assets/timetravelmart.svg'
import menu from '../../assets/menu.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <a href="/#courses">
                <img alt = "menu" className='menu' src={menu} />
            </a>
            <a href="/">
                <img alt= "time travel mart logo" className= "ttmHeaderLogo" src= {TimeTravelMartLogo}/>
            </a>
        </div>
    )
}

export default Header
