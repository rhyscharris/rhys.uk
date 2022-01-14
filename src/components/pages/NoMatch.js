import React from 'react'
import './NoMatch.css';
import '../../App.css';
import {
    useLocation as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
  } from "react-router-dom";
import Typewriter from "typewriter-effect";
function NoMatch () {
    let location = useLocation();
    return (
        <div className='full-group'>
            <div className='center-group'>
                <p>404 - Not Found</p>
                <h1>
                    <Typewriter
                        options={{
                        loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("No foundo the pageo").start()
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("Nothing to see here").start()
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString("Sorry, not found").start()
                                .pauseFor(1500)
                                .deleteAll()
                        }}
                    />
                </h1> 
                <h2>Could not find 'rhys.uk{location.pathname}', maybe it's been deleted or never existed</h2>
                <Link to="/"><h3>Let's go home 🏠</h3></Link>
            </div>
        </div>
    )
}

export default NoMatch