import React from 'react'
import './Hero.css';
import '../App.css'
import person from './person.png'
import leftshapes from './left-shapes.png'
import rightshapes from './right-shapes.png'
import leftshapes2x from './left-shapes-2x.png'
import rightshapes2x from './right-shapes-2x.png'

import leftshapesmobile from './left-shapes-mobile.png'
import rightshapesmobile from './right-shapes-mobile.png'
import leftshapesmobile2x from './left-shapes-mobile-2x.png'
import rightshapesmobile2x from './right-shapes-mobile-2x.png'



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
                    {/*<img src={rightshapes} alt='Colourful 3D shapes'></img>*/}
                    <picture>
                        <source media="(min-width: 64em)" src={rightshapes} srcSet={`${rightshapes} 631w, ${rightshapes2x} 1262w`} />
                        <source media="(min-width: 40em)" src={rightshapesmobile} srcSet={`${rightshapesmobile} 279w, ${rightshapesmobile2x} 558w`} />
                        <img src={rightshapes} alt='Colourful 3D shapes'></img>

                        {/*<source media="(min-width: 64em)" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616682131/website-assets/press/hands_right.png" srcset="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616682131/website-assets/press/hands_right.png 631w,https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616686140/website-assets/press/hands_right_2x.png 1262w"></source>
                        <source media="(min-width: 40em)"  src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616776346/website-assets/press/hands_right_tablet.png" srcset="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616776346/website-assets/press/hands_right_tablet.png 279w,https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616776346/website-assets/press/hands_right_tablet_2x.png 558w"></source>
                        <img alt="Press Microphones" src="https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1616776346/website-assets/press/hands_right_tablet.png" title=""></img>*/}
                    </picture>
                </div>
            </div>
        </div>
    )
}

export default Hero