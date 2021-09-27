import React from "react"; //When ever we use JSX we have to import React
import ImageSlider from "./Component/ImageSlider";

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageSlider/>
        </div>
    );
  }
}

export default App;

//The SetState is  a async function