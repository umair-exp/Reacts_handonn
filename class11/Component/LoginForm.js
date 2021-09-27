import React from "react";

const innitialState = {
  email: "",
  password: "",
  emailerror: false,
  passworderror: false,
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = innitialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  EmailValidation = (email) => {
    let emailRegrex =
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    return emailRegrex.test(email) ? false : true;
  };
  PasswordValidation = (password) => {
    return password !== "" ? false : true;
  };

  handleSubmit = (event) => [
    this.EmailValidation(),
    //   console.log(this.state),
    this.setState({
      emailerror: this.EmailValidation(this.state.email),
      passworderror: this.PasswordValidation(this.state.password),
      email:"",
      password: "",
    }),
    event.preventDefault(),
  ];
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Entername"
            onChange={this.handleChange}
          />
          <div
            style={
              this.state.emailerror
                ? { display: "block", color: "red" }
                : { display: "none" }
            }
          >
            Enter a valid Email
          </div>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Entername"
            onChange={this.handleChange}
          />
          <div
            style={
              this.state.passworderror
                ? { display: "block", color: "red" }
                : { display: "none" }
            }
          >
            Enter Password
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
