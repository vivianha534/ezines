import React from 'react'
import Text from '../../components/course1/Text.js'
import '../CourseContainer.css'
import FirstCourseMeat from "../../assets/meatCoursePhotos/FirstCourseMeat.svg"

const Course1Container = ({questions}) => {
    return (
        <div className="course">
            <img className="coursePhoto" src={FirstCourseMeat} />
            <h1 className='title'>First Course | Variety is the Spice of Life </h1>
            <Text questions={questions}/>
            <div className="courseButtonContainer">
                <a href="/course2"><button >Next -></button></a>
            </div>
        </div>
    )
}

export default Course1Container
