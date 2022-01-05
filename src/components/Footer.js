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
                    <button onClick={onClick}>
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer