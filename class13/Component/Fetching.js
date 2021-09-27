import React from "react";

export default class Fetching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
    const People=this.state.people.map((person) => {
        return (
          <div key={person.login.uuid}>
            <h1>{person.name.first} {person.name.last}</h1>
            <img src={person.picture.medium} alt="not found" />
          </div>
        );
      })
    return (
      <div>
        {this.state.loading ? (
          "Loading"
        ) : (
          <div>
              {People}
          </div>
        )}
      </div>
    );
  }
}
