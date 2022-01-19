import React, {useEffect, useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import setTheme from '../App';
import theme from '../App';
import './Footer.css';
import useLocalStorage from 'use-local-storage'
import cv from '../cv.pdf'

const storedPreference = localStorage.getItem('color-preference');
const themeStoredPreference = localStorage.getItem('theme-preference');

class Footer extends React.Component {
    constructor(props) {
        super(props); // Part of constructor
        if (storedPreference) { // if a preference is stored after a previous session on rhys.uk, then
            document.documentElement.dataset.colorPreference = storedPreference; // set the custom data attribute (data-color-preference) to equal the user's stored pref. CSS will then kick in
            this.state = {value: storedPreference}; // then set the <select> value to be the user's stored pref. This works because the <select> value is tied to {this.state.value}
        }
        else {
            this.state = {value: 'auto'}; // otherwise, set the <select> value to be 'null'. Without this, new users couldn't navigate the site.
            document.documentElement.dataset.colorPreference = this.state.value // ensure data-color-preference is set to 'auto'
        }
        if (themeStoredPreference) {
            document.documentElement.dataset.themePreference = themeStoredPreference
            this.theme = {value: themeStoredPreference}; // then set the <select> value to be the user's stored pref. This works because the <select> value is tied to {this.state.value}
        }
        else {
            this.theme = {value: 'teal'}; // otherwise, set the <select> value to be 'null'. Without this, new users couldn't navigate the site.
            document.documentElement.dataset.themePreference = this.theme.value // ensure data-theme-preference is set to 'teal' by default
        }
        this.handleChange = this.handleChange.bind(this); // Part of constructor
        this.handleThemeChange = this.handleThemeChange.bind(this)
    }
    
    //event handler for dark/light mode
    handleChange(event) { // When a user changes the <select> value, do this...
        this.setState({value: event.target.value}); // Tells selector what to display. So, keep selector's current value
        this.state = {value: event.target.value}; // set this.state.value to just the target value. Otherwise it needs a full submit button.
        document.documentElement.dataset.colorPreference = this.state.value; // set the custom data attribute (data-color-preference) to equal to whatever value is in the selector
        localStorage.setItem('color-preference', document.documentElement.dataset.colorPreference); // write the custom data attribute (data-color-preference) to user's local browser storage. When they navigate elsewhere on the site, or return, preferences will be saved.
    }
    //event handler for theme colour
    handleThemeChange(event) { // When a user changes the *theme* <select> value, do this...
        this.setState({value: event.target.value}); // Tells selector what to display. So, keep selector's current value
        this.theme = {value: event.target.value}; // set this.state.value to just the target value. Otherwise it needs a full submit button.
        document.documentElement.dataset.themePreference = this.theme.value; // set the custom data attribute (data-theme-preference) to equal to whatever value is in the selector
        localStorage.setItem('theme-preference', document.documentElement.dataset.themePreference); // write the custom data attribute (data-theme-preference) to user's local browser storage. When they navigate elsewhere on the site, or return, preferences will be saved.
    }
    

    render() {
        return (
            <>
                <svg class="footer-angle" preserveAspectRatio="none" width="1000" height="50" viewBox="0 0 1000 50" xmlns="http://www.w3.org/2000/svg"><path d="M1000 0H0v50z" fill="none" fill-rule="evenodd"></path></svg>
                <footer>
                    <div className="footer-wrapper">
                        <p className="footer-description">Built by myself (Rhys) using React, with the code viewable on <a href='https://github.com/rhyscharris/rhys.uk' target="_blank" class='external-link'>GitHub</a>. This site is hosted on GCP, and uses the font <a href='https://www.behance.net/gallery/53569199/Commuters-Sans' target="_blank" class='external-link'>'Commuters Sans'</a>. No free cookies included, only tracking is your theme preferences.</p>
                        <div class="footer-links">
                            <p class="name"><a href="/">Rhys Harris</a></p>
                            <ul>
                                <li>
                                    <a href="/" class="">Home</a>
                                </li>
                                <li>
                                    <a href="/#design">Design</a>
                                </li>
                                <li>
                                    <a href="/#coding">Coding</a>
                                </li>
                                <li><a href={cv} target={'_blank'}>CV</a>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-tools'>
                            <div className='footer-line'>
                                <label for='color-preference'>Mode</label>
                                <div className='select-input'>
                                    <select value={this.state.value} onChange={this.handleChange} id="color-preference" className='theme-select' aria-label="Select color scheme preference">
                                        <option value="auto">Detect ({window.matchMedia('(prefers-color-scheme: dark)').matches ? "Dark)" : "Light)"}</option>
                                        <option value="light">Light</option>
                                        <option value="dark">Dark</option>
                                    </select>
                                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5 9.63c.3 0 .47-.18.72-.63l4.03-7.68c.15-.28.25-.47.25-.67C10 .05 9.35 0 8.96 0H1.04C.64 0 0 .05 0 .65c0 .2.1.4.25.67L4.28 9c.25.45.42.63.72.63z" fill-rule="nonzero"></path></svg>
                                </div>                              
                            </div>
                            <div className='footer-line'>
                                <label for='color-preference'>Theme</label>
                                <div className='select-input'>
                                    <select value={this.theme.value} onChange={this.handleThemeChange} id="theme-preference" className='theme-select' aria-label="Select color scheme preference">
                                        <option value="teal">Teal</option>
                                        <option value="purple">Purple</option>
                                        <option value="sunrise">Sunrise</option>
                                        <option value="pink/blue">Pink/Blue</option>
                                    </select>
                                    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5 9.63c.3 0 .47-.18.72-.63l4.03-7.68c.15-.28.25-.47.25-.67C10 .05 9.35 0 8.96 0H1.04C.64 0 0 .05 0 .65c0 .2.1.4.25.67L4.28 9c.25.45.42.63.72.63z" fill-rule="nonzero"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer