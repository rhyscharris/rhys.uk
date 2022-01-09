import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import useLocalStorage from 'use-local-storage'

function App() {


  const logoSource2 = 'images/logo-grey-no-bg.png';
  return (
    <>
      <Router>
        <div class="app">
          <Navbar src={logoSource2}/>
          <Switch>
            <Route path='/' exact component = {Home} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;