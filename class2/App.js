import React from 'react';
import logo from './logo.svg';
import './App.css';

const Body=()=>(
  <div>
    <h1>I am the Body My Body My choice hahahahahaha</h1>
  </div>
)

class Header extends React.Component{
  render(){
    return(
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is Class 2 which tells how to use mutiple Component to simplify our work
  
          </a>
        </header>
    )
  }

}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
  
}

export default App;
