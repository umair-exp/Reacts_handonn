import React from "react";

export default class Fetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      people: [],
    };
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    this.setState({
      loading: false,
      people: data.results,
    });
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          "Loaing"
        ) : (
          <div>
            {this.state.people.map((person) => {
              return (
                <div>
                  <h1>{person.name.first} {person.name.last}</h1>
                  <img src={person.picture.medium} alt="not found" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
