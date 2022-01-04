import useLocalStorage from 'use-local-storage'
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'




function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; /* Have they got a theme preference set? */
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light'); /* Keep user preference if they set light before */
  return (
    <>
      <Router>
        <div classname="app" data-theme={theme}>
          <Navbar />
          <Switch>
            <Route path='/' exact component = {Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;