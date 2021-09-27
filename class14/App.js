import React from "react"; //When ever we use JSX we have to import React
import Counter from "./Component/Counter";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        count:0,

    }
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleDecrement=this.handleDecrement.bind(this);
}
handleIncrement=()=>{
    this.setState({
        count:this.state.count+1,
    })
    
}
handleDecrement=()=>{
    this.setState({
        count:this.state.count-1,
    })
    
}
  render() {
    return (
      <div>
        <Counter
        count={this.state.count}
        incerment={this.handleIncrement}
        decrement={this.handleDecrement} />
        <Counter
        count={this.state.count}
        incerment={this.handleIncrement}
        decrement={this.handleDecrement} />
      </div>
    );
  }
}

export default App;
//In innital the Propblem is when we unmount the COuner it lossed it state and set to innitak which is zero to hadle these Problems we use React life cycles 
//In this Example we can simple use css to display none to make our work easier