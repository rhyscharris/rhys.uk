import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import setTheme from '../App';
import theme from '../App';
import './Footer.css';
import useLocalStorage from 'use-local-storage'



function Footer({onClick, theme}) {
    return (
        <>
            <footer>
                <div className="footer-wrapper">
                    <p className="footer-description">Built by myself (Rhys) using React Native, with the code viewable on GitHub. This site is hosted on GCP, and uses the font 'Commuter Sans'. No free cookies included, only tracking is your light/dark mode preferences.</p>
                    <div class="footer-links">
                        <p class="name"><a href="/">Rhys Harris</a></p>
                        <ul>
                            <li>
                                <a href="/" class="">Home</a>
                            </li>
                            <li>
                                <a href="/">Design</a>
                            </li>
                            <li>
                                <a href="/">Coding</a>
                            </li>
                            <li><a href="/">CV</a>
                            </li>
                        </ul>
                    </div>
                    <select id="color-preference" aria-label="Select color scheme preference">
                            <option value="auto">Auto</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                    </select>
                   <button onClick={onClick} className='theme-button'>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer