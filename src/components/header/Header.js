import React from 'react'
import TimeTravelMartLogo from '../../assets/timetravelmart.svg'
import menu from '../../assets/menu.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div></div>
            <img className='menu' src={menu} />
            <img src= {TimeTravelMartLogo}/>
        </div>
    )
}

export default Header
