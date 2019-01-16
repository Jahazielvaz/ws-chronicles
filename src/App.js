import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PageContainer from './components/PageContainer/PageContainer';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PageContainer />
      </div>
    );
  }
}

export default App;
