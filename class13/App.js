import React from "react"; //When ever we use JSX we have to import React
import Fetching  from "./Component/Fetching";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  render() {
    return (
      <div>
        <Fetching />
      
        </div>
    );
  }
}

export default App;
//In innital the Propblem is when we unmount the COuner it lossed it state and set to innitak which is zero to hadle these Problems we use React life cycles 
//In this Example we can simple use css to display none to make our work easier