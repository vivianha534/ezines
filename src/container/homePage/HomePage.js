import React from 'react'
import "./HomePage.css"

const HomePage = () => {
    return (
        <div >
            <div className='rectangleContainer'>
                <div className='quad1'><img /> </div>
                <div className='quad2'><img/> </div>
                <div className='quad3'><img/> </div>
                <div className='quad4'><img/> </div>
            </div>
            <div id="courses" className='courseListContainer'>
                <div className="courseText">
                    <a className="course1" href = "/course1">First Course</a>
                    <p className="course1">Variety Is The Spice of Life</p>
                </div>
                <div className="courseText">
                    <a className="course2" href = "/course2">Second Course</a>
                    <p className="course2">Made with Love</p>
                </div>
                <div className="courseText">
                    <a className="course3" href = "/course3">Third Course</a>
                    <p className="course3">Meat - Food for Thought</p>
                </div>
                <div className="courseText">
                    <a className="course4" href = "/course4">Fourth Course</a>
                    <p className="course4">Just Desserts</p>
                </div>
                <div className="courseTextAbout">
                    <a className="about" href = "/about">About Course</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
