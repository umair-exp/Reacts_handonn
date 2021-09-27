import React from "react";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pet: "",
      marked: false,
      persons: "Person3",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    console.log(event.target.name);
    event.target.name === "checkbox"
      ? this.setState({
          marked: !this.state.marked,
        })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  };
  handleSubmit = (event) => [
    event.preventDefault(),
    console.log(this.state),
    this.setState({
      name: "",
      pet: "",
      marked: false,
      persons: "Person3",
    }),
  ];

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="pet"
            value={this.state.pet}
            onChange={this.handleChange}
          />

          <textarea
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="checkbox"
            name="checkbox"
            checked={this.state.marked}
            onChange={this.handleChange}
          />

          <select
            name="persons"
            onChange={this.handleChange}
            value={this.state.persons}
          >
            <option>Person1</option>
            <option>Person2</option>
            <option>Person3</option>
            <option>Person4</option>
          </select>

          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
