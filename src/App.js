import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches; /* Have they got a theme preference set? */
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light'); /* React Hook - If defaultDark true, keep user preference (dark). Otherwise, light theme. */
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <>
      <Router>
        <div class="app" data-theme={theme}>
          <Navbar />
          <Switch>
            <Route path='/' exact component = {Home} />
          </Switch>
          <Footer onClick={switchTheme} theme={theme}/>
        </div>
      </Router>
    </>
  );
}

export default App;