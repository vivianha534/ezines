import React from 'react'
import "./HomePage.css"
import FirstCourse from "../../assets/courseMeat/FirstCourse.png"
import SecondCourse from "../../assets/courseMeat/SecondCourse.png"
import ThirdCourse from "../../assets/courseMeat/ThirdCourse.png"
import FourthCourse from "../../assets/courseMeat/FourthCourse.png"

const HomePage = () => {
    return (
        <div >
            <div className='rectangleContainer'>
                <div className='quad1'><img className="courseMeat" src={FirstCourse} alt="course 1"/> </div>
                <div className='quad2'><img className="courseMeat" src={SecondCourse} alt="course 2"/> </div>
                <div className='quad3'><img className="courseMeat" src={ThirdCourse} alt="course 3"/> </div>
                <div className='quad4'><img className="courseMeat" src={FourthCourse} alt="course 4"/> </div>
            </div>
            <div className = "titleContainer">
                <p className="text1">Explore the delicacy of...</p>
                <p className="text2">Mammoth </p>
                <p className='text2'>Chunks </p>
                <p className='text1'>E-Zine</p>
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
                    <a className="about" href = "/about">About Us</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
