import React from "react";
import "./App.css";
import AutoPrefix from "./AutoPrefixer";
import "react-dropdown/style.css";

export default class AutoPrefixView extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrefixChange = this.handlePrefixChange.bind(this);
    this.handlePrefixTypeChange = this.handlePrefixTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      preFixOptions: ["PrefixClassName"],
      inputText: "",
      outputText: "",
    };
  }

  handleInputChange(event) {
    this.setState({ inputText: event.target.value });
  }

  handlePrefixChange(event) {
    this.setState({ prefixText: event.target.value });
  }

  handlePrefixTypeChange(event) {
    this.setState({ prefixType: event.target.value });
  }
  handleSubmit(event) {
    // function goes here andrew
    var output = AutoPrefix(this.state.inputText, this.state.prefixText);
    this.setState({
      outputText: output,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="app-container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <div className="flex-col" style={{ width: "20%" }}>
              <div className="flex-row">
                Prefix:
                <input
                  type="text"
                  value={this.state.inputPrefix}
                  onChange={this.handlePrefixChange}
                />
              </div>
              <div className="button">
                <input type="submit" value="Auto Prefix" />
              </div>
            </div>
            <div className="flex-col" style={{ width: "40%" }}>
              Input:
              <textarea
                className="text-input-field"
                name="input"
                value={this.state.inputText}
                onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className="flex-col" style={{ width: "40%" }}>
              Output:
              <textarea
                className="text-input-field"
                name="output"
                value={this.state.outputText}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
