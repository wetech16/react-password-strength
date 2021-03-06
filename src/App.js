import React from "react";
import ReactPasswordStrength from "react-password-strength";

export default class App extends React.Component {
  state = { passLength: 0, password: "", score: 0 };

  changeCallback = (state) =>
    this.setState({
      passLength: state.password.length,
      password: state.password,
      score: state.score,
    });

  clear = () => this.ReactPasswordStrength.clear();

  render() {
    const inputProps = {
      placeholder: "Try a password...",
      autoFocus: true,
      className: "another-input-prop-class-name",
    };

    return (
      <div id="example">
        <h1>React Password Strength Tool</h1>
        <p>
          Powered by{" "}
          <a
            href="https://github.com/dropbox/zxcvbn"
            target="_blank"
            rel="noopener noreferrer"
          >
            zxcvbn
          </a>
        </p>

        <ReactPasswordStrength
          ref={(ref) => (this.ReactPasswordStrength = ref)}
          minLength={6}
          inputProps={{ ...inputProps, id: "inputPassword1" }}
          changeCallback={this.changeCallback}
        />

        <button
          onClick={this.clear}
          disabled={this.state.passLength === 0}
        >
          Clear
        </button>

        <h3>Password Input with Default Value</h3>

        <ReactPasswordStrength
          minLength={6}
          inputProps={{ ...inputProps, id: "inputPassword2" }}
          defaultValue="defaultValue"
        />

        <h3>Password Input with Custom Styling</h3>

        <ReactPasswordStrength
          className="CustomInput"
          minLength={6}
          inputProps={{ ...inputProps, id: "inputPassword3" }}
        />
        <p>
          Password:
          {this.state.password}
          <hr />
          Scores:
          {this.state.score}
        </p>
      </div>
    );
  }
}
