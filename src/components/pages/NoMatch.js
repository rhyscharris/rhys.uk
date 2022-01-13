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
function NoMatch () {
    let location = useLocation();
    return (
        <div className='full-group'>
            <div className='center-group'>
                <p>404 - Not Found</p>
                <h1>No foundo the pageo</h1> 
                <h2>Could not find 'rhys.uk{location.pathname}', maybe it's been deleted or never existed</h2>
            </div>
        </div>
    )
}

export default NoMatch