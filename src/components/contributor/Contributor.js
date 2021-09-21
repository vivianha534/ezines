import React from 'react'
import "./Contributor.css"

const Contributor = ({contributor}) => {
    return (
        <div className="contributor">
            <p>{contributor.contribution} <br/> {contributor.name}</p>
            <a href={contributor.website}>{contributor.website}</a>
        </div>
    )
}

export default Contributor
