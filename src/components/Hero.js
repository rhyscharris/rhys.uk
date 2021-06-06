import React from 'react'
import './Hero.css';
import '../App.css'
import person from './person.png'
import leftshapes from './left-shapes.png'
import rightshapes from './right-shapes.png'



function Hero () {
    return (
        <div className='hero-container'>
            <div className='hero-container-inner'>
                <div className='hero-image image-left'>
                    <img src={leftshapes} alt='Colourful 3D shapes'></img>
                </div>
                <div className='hero-items'>
                    <p>Hello</p>
                    <h1>I'm Rhys</h1>
                    <p>A Systems Engineer by day, Digital Designer and occasional coder by night.</p>
                </div>
                <div className='hero-items'>
                    <img src={person} alt='Picture of person'></img>
                </div>
                <div className='hero-image image-right'>
                    <img src={rightshapes} alt='Colourful 3D shapes'></img>
                </div>
            </div>
        </div>
    )
}

export default Hero