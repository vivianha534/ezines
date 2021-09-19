import React from 'react'
import Text from '../../components/course1/Text.js'
import '../CourseContainer.css'

const Course1Container = ({questions}) => {
    return (
        <div className="course">
            <h1 className='title'>First Course | Variety is the Spice of Life </h1>
            <Text questions={questions}/>
            <div className="courseButtonContainer">
                <a href="/"><button >Home</button></a>
                <a href="/course2"><button >Course 2</button></a>
            </div>
        </div>
    )
}

export default Course1Container
