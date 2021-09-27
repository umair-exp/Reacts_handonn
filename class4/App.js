import React from 'react';//When ever we use JSX we have to import React
import './App.css';
import Body from './Component/Body';
import Header from './Component/Header';

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
//If we use export dafault name is not restricted in importing you can name it anything in importing 
//If you have to export more than one thing you have to use {}with name exact name in importing
//If we use only export we have to call it with exact name in importing
// It is all about preference for export we can use auto completion Teacher prefer export and not export default