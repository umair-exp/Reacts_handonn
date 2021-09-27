import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component() {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is Class 1 which only does setup
  
          </a>
        </header>
      </div>
    );
  }
}

export default App;
