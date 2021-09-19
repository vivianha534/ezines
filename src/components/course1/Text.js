import React from 'react'
import './Text.css'

const Text = ({questions}) => {
    return(
        questions.map((question) => {
            return(
                <div>
                    <p className='question'>{question}</p>
                    <textarea className='input'></textarea>
                </div>
            )
        })
    )
}

export default Text
