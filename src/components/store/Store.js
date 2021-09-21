import React from 'react'

const Store = ({store}) => {
    return (
        <div>
            <p>{store.name} <br/> {store.address} <br/> {store.zip}</p>
        </div>
    )
}

export default Store
