import React from "react"; //When ever we use JSX we have to import React

import Counter from "./Component/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter Initial={0}/>
        <Counter Initial={10}/>
      </div>
    );
  }
}

export default App;

//To use State property in function we have to bind it with in constructor
//In React we have to change state always by setState Function
//Function componenent can use state while class Component can
//constructor is used to pass props that can be assign in state for innitial value