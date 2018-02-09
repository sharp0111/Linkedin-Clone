import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './NavBar/NavBar';
import Card from './Card/Card';

import postData from './data.js';

class App extends Component {

  render() {
    return (
      <div className='app__container'>
        <NavBar />
        <div className='body__container'>
          {/* <LeftRail />
          <Card />
          <Banner /> */}
        </div>
      </div>
    );
  }
}

export default App;
