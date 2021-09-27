import React from "react";
import Image1 from "../Images/Image1.png";
import Image2 from "../Images/Image2.png";
import Image3 from "../Images/Image3.png";
import Image4 from "../Images/Image4.png";
export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [Image1, Image2, Image3, Image4],
      currentImage: 0,
    };
    this.HandleNextImage = this.HandleNextImage.bind(this);
    this.HandlePrevImage = this.HandlePrevImage.bind(this);
  }
  HandleNextImage() {
    this.setState({
      currentImage: (this.state.currentImage + 1) % this.state.image.length,
    });
  }
  HandlePrevImage() {
    if (this.state.currentImage === 0) {
      this.setState({
        currentImage: this.state.image.length-1,
      });
    } else {
      this.setState(
        {
          currentImage: this.state.currentImage - 1,
        });
    }
  }
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          Image Slider
        </div>
        <div>
          <button
            style={{
              float: "left",
              marginTop: "50vh",
            }}
            onClick={this.HandlePrevImage}
          >
            Previous
          </button>
          <button
            style={{
              float: "right",
              marginTop: "50vh",
            }}
            onClick={this.HandleNextImage}
          >
            Next
          </button>
          <img
            alt="sdfg"
            src={this.state.image[this.state.currentImage]}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "30%",
            }}
          />
        </div>
      </div>
    );
  }
}
