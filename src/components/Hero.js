import React from 'react'
import './Hero.css';
import '../App.css'
import person from './person.png'
import leftshapes from './left-shapes.png'
import rightshapes from './right-shapes.png'
import leftshapes2x from './left-shapes-2x.png'
import rightshapes2x from './right-shapes-2x.png'

import bottomshapes from './bottom-shapes.png'

import leftshapesmobile from './left-shapes-mobile.png'
import rightshapesmobile from './right-shapes-mobile.png'
import leftshapesmobile2x from './left-shapes-mobile-2x.png'
import rightshapesmobile2x from './right-shapes-mobile-2x.png'

import Typewriter from "typewriter-effect";

function Hero () {
    return (
        <div className='hero-container'>
            <div className='hero-container-inner'>
                <div className='hero-image image-left'>
                    <picture>
                        <source media="(min-width: 85em)" src={leftshapes} srcSet={`${leftshapes} 631w, ${leftshapes2x} 1262w`} /> {/* XXXw is the max-width of the image in pixels */}
                        <source media="(min-width: 45em)" src={leftshapesmobile} srcSet={`${leftshapesmobile} 279w, ${leftshapesmobile2x} 558w`} />
                        <source sizes="" src={bottomshapes} />
                        {/*<source sizes="100vw" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616774380/website-assets/press/hands_small.png" srcset="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616774380/website-assets/press/hands_small_2x.png 375w,https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616774380/website-assets/press/hands_small_2x.png 750w"></source>*/}
                        <img src={bottomshapes} alt='Colourful 3D shapes'></img>
                    </picture>
                </div>
                <div className='hero-items hero-text'>
                    <p className='stroke-text'>
                        <Typewriter
                            options={{
                            loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Hello").start()
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("Yo").start()
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString("What's up").start()
                                    .pauseFor(1500)
                                    .deleteAll()
                            }}
                        />
                    </p>
                    <h1>I'm Rhys</h1>
                    <p>A Systems Engineer by day, Digital Designer and occasional coder by night.</p>
                </div>
                <div className='hero-items person-image'>
                    <img src={person} alt='Rhys Harris'></img>
                </div>
                <div className='hero-image image-right'>
                    {/*<img src={rightshapes} alt='Colourful 3D shapes'></img>*/}
                    <picture>
                        <source media="(min-width: 85em)" src={rightshapes} srcSet={`${rightshapes} 631w, ${rightshapes2x} 1262w`} />
                        <source media="(min-width: 45em)" src={rightshapesmobile} srcSet={`${rightshapesmobile} 279w, ${rightshapesmobile2x} 558w`} />
                        <img src={rightshapes} alt='Colourful 3D shapes'></img>
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Hero