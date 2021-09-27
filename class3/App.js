import React from 'react';
import logo from './logo.svg';
import './App.css';

const Body=(props)=>(
  <div>
    <h1>I can use Pros as well but you have to call my first
      {props.text}
    </h1>
  </div>
)

class Header extends React.Component{
  render(){
    
    return(
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{this.props.title}</h1>
          <h3>This is number  {this.props.num} given by my parent</h3>
          <h3>this is property 1 of the object which is{this.props.myObj.property1} </h3>
          <h3>this is property 2 of the object which is{this.props.myObj.property2} </h3>
          <h3>This is through JSON stringify{JSON.stringify(this.props.myObj)}</h3>
          <h3>This is Array zero index data {this.props.myArr[0]}</h3>
          <h3>This adding is through parent function{this.props.Myfunc(this.props.myArr[0],this.props.myArr[1])}</h3>
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is Class 3 which tells how to pass props to Child component from parent component the props include data like string numbers objects arrays fuctions in class component and Function Component
  
          </a>
          
        </header>
    )
  }

}

class App extends React.Component {
  render(){
    const add=(a,b)=>a+b;
    return (
      <div className="App">
        <Header title={"This is the data given by the parent to Header 1"} num={1} myObj={{property1:5,property2:6}} myArr={[2,3,5,4]} Myfunc={add} />
        <Header title={"This is the data given by the parent to Header 2"} num={2} myObj={{property1:7,property2:8}} myArr={[3,1,7,2]} Myfunc={add} />

        <Body text={"This is the text"}/>
      </div>
    );
  }
  
}

export default App;
