import React from "react";
import logo from "../logo.svg";
export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{this.props.title}</h1>
        <h3>This is number {this.props.num} given by my parent</h3>
        <h3>
          this is property 1 of the object which is{this.props.myObj.property1}{" "}
        </h3>
        <h3>
          this is property 2 of the object which is{this.props.myObj.property2}{" "}
        </h3>
        <h3>
          This is through JSON stringify{JSON.stringify(this.props.myObj)}
        </h3>
        <h3>This is Array zero index data {this.props.myArr[0]}</h3>
        <h3>
          This adding is through parent function
          {this.props.Myfunc(this.props.myArr[0], this.props.myArr[1])}
        </h3>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is Class 3 which tells how to pass props to Child component from
          parent component the props include data like string numbers objects
          arrays fuctions in class component and Function Component
        </a>
      </header>
    );
  }
}
