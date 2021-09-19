import React from 'react'
import Text from '../../components/course1/Text.js'
import './Course1Container.css'

const Course1Container = ({questions}) => {
    return (
        <div className="course1">
            <h1 className='title'>First Course/Variety is the Spice of Life </h1>
            <Text questions={questions}/>
        </div>
    )
}

export default Course1Container
