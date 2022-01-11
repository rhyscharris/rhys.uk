import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import setTheme from '../App';
import theme from '../App';
import './Footer.css';
import useLocalStorage from 'use-local-storage'

const selectEl = document.getElementById('color-preference');

// When the user changes the <select> value, the preference is changed for `data-color-preference`, and is stored in `localStorage`
//selectEl.addEventListener('change', function(e) {
//  const preference = e.target.value;

//  document.documentElement.dataset.colorPreference = preference;
//  localStorage.setItem('color-preference', preference);
//});

// When arriving on the page a check is made to see if there is a stored preference, and if there is it is applied to `data-color-preference` and the <select>’s value is updated to match
//const storedPreference = localStorage.getItem('color-preference');
//if (storedPreference) {
//  document.documentElement.dataset.colorPreference = storedPreference;
//  selectEl.value = storedPreference;
//}

class ColourTheme extends React.Component {

}

const storedPreference = localStorage.getItem('color-preference');

class Footer extends React.Component {
    constructor(props) {
        super(props); // Part of constructor
        if (storedPreference) { // if a preference is stored after a previous session on rhys.uk, then
            document.documentElement.dataset.colorPreference = storedPreference; // set the custom data attribute (data-color-preference) to equal the user's stored pref. CSS will then kick in
            this.state = {value: storedPreference}; // then set the <select> value to be the user's stored pref. This works because the <select> value is tied to {this.state.value}
        }
        else {
            this.state = {value: 'auto'}; // otherwise, set the <select> value to be 'auto'. Without this, new users couldn't navigate the site.
            document.documentElement.dataset.colorPreference = this.state.value // ensure data-color-preference is set to 'auto'
        }
        this.handleChange = this.handleChange.bind(this); // Part of constructor
    }
    
    handleChange(event) { // When a user changes the <select> value, do this...
        this.setState({value: event.target.value}); // Tells selector what to display. So, keep selector's current value
        this.state = {value: event.target.value}; // set this.state.value to just the target value. Otherwise it needs a full submit button.
        document.documentElement.dataset.colorPreference = this.state.value; // set the custom data attribute (data-color-preference) to equal to whatever value is in the selector
        localStorage.setItem('color-preference', document.documentElement.dataset.colorPreference); // write the custom data attribute (data-color-preference) to user's local browser storage. When they navigate elsewhere on the site, or return, preferences will be saved.
    }
    

    render() {
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
                        <select value={this.state.value} onChange={this.handleChange} id="color-preference" className='theme-select' aria-label="Select color scheme preference">
                                <option value="auto">Auto ({window.matchMedia('(prefers-color-scheme: dark)').matches ? "Dark)" : "Light)"}</option>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                        </select>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer