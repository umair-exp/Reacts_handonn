import React from "react"; //When ever we use JSX we have to import React
import Counter from "./Component/Counter";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      visible:true
    }
    this.handleHide=this.handleHide.bind(this);  
  }
  
  handleHide(){
    this.setState({
     visible:!this.state.visible
    });
  }

  render() {
    return (
      <div>
        <div style={this.state.visible?{display:"block"}:{display:"none"}}  >
        <Counter />
        </div>
        
        <button style={{
          marginLeft: "40vw",
          marginRight: "40vw",
          marginTop:"10vh",
          width: "20%",
        }} onClick={this.handleHide}>{this.state.visible?"Hide":"Show"}</button>
        </div>
    );
  }
}

export default App;
//In innital the Propblem is when we unmount the COuner it lossed it state and set to innitak which is zero to hadle these Problems we use React life cycles 
//In this Example we can simple use css to display none to make our work easier