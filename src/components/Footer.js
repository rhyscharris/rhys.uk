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
                    <p className="footer-description">Built by myself (Rhys) using React Native, with the code viewable on GitHub. This site is hosted on GCP, and uses the font 'Commuter Sans'. No free cookies or tracking included.</p>
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
                    <button onClick={onClick} className='theme-button'>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer