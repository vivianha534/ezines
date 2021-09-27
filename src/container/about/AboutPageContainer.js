import React from 'react'
import logo from '../../assets/logo.svg'
import TTM from '../../assets/TTM.svg'
import Contributor from "../../components/contributor/Contributor.js"
import Store from "../../components/store/Store.js"
import './AboutPageContainer.css'
import Footer from '../../components/footer/Footer.js'

const AboutPageContainer = ({contributors, stores}) => {
    return (
        <div className='aboutPageContainer'>
            <img className="logo" src={logo} />
            <h2>About 826LA</h2>
            <p>826LA is a non-profit organization dedicated to supporting Los Angeles students with their creative and expository writing skills, and to helping teachers inspire their students to write. 
                <br/><br/>826 LA is part of the 826 National (the largest youth- writing organization of chapters around the US), co-founded by Dave Eggers and Nínive Calegari. 
            </p>

            <a className="link" href="https://www.826LA.org">www.826LA.org</a>
            <img className="ttmArrows" src={TTM} />
            <h2>About Time Travel Mart</h2>
            <p>We’re a time travel mart, we service all of your time travel needs. All proceeds from our stores go directly back into funding the 826LA writing programs for students. </p>
            <a  className="link"  href="https://timetravelmart.com/">www.timetravelmart.com</a>

            <h2 className='subheading'>Stores</h2>
            {stores.map((store) => {
                    return <Store store = {store} />
            })}

            <h2 className='subheading'>Art</h2>
            {contributors.map((contributor) => {
                return <Contributor contributor = {contributor} />
            })}
            <Footer />
        </div>
    )
}

export default AboutPageContainer
