import React from 'react'
import Text from '../../components/course1/Text.js'
import '../CourseContainer.css'

const Course1Container = ({questions}) => {
    return (
        <div className="course">
            <h1 className='title'>First Course | Variety is the Spice of Life </h1>
            <p className='screenshot'>Note! Take a screenshot to save your thoughts!</p>
            <Text questions={questions}/>
            <div className="courseButtonContainer">
                <a href="/"><button> &lt;&ndash;</button></a>
                <a href="/course2"><button>Next &ndash;&gt;</button></a>
            </div>
        </div>
    )
}

export default Course1Container
