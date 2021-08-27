import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Hero = () => {
    return (     
        <section className="hero is-medium is-link">
            <div className="hero-body">
                <p className="title">
                Medium hero
                </p>
                <ItemDetailContainer />
            </div>
        </section>
    )
}


export default Hero