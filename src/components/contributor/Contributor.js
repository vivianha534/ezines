import React from 'react'
import "./Contributor.css"

const Contributor = ({contributor}) => {
    return (
        <div className="contributor">
            <p className="contributorText">{contributor.contribution} <br/> {contributor.name}</p>
            <a className="contributorLink" href={contributor.website}>{contributor.website}</a>
        </div>
    )
}

export default Contributor
