import React from "react";
import TodoList from "./Component/Todolist";

class App extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;