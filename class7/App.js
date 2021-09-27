import React from "react"; //When ever we use JSX we have to import React
import ImageSlider from "./Component/ImageSlider";

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
        {this.state.visible?<ImageSlider/>:<div>Halou</div>}
        <button style={{
          isplay: "block",
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

//The SetState is  a async function