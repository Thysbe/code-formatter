import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default class AutoPrefixView extends React.Component {
  constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrefixChange = this.handlePrefixChange.bind(this);
    this.handlePrefixTypeChange = this.handlePrefixTypeChange.bind(this);

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

  handleClick(event) {
    this.setState({
      outputText: "hello",
      inputText: "hello2",
    });
    console.log("hhi!");
    event.preventDefault();
  }

  render() {
    return (
      <div className="app-container">
        <form>
          <div className="input-container">
            <div className="flex-col" style={{ width: "20%" }}>
              {/* <Dropdown
                className="dropdown"
                options={this.state.preFixOptions}
                value={this.state.selectedPrefixOption}
                onChange={this.handlePrefixTypeChange}
                placeholder="Select an option"
              /> */}
              <div className="flex-row">
                Prefix:
                <input
                  type="text"
                  value={this.state.inputPrefix}
                  onChange={this.handlePrefixChange}
                />
              </div>
              <div className="button">
                <button onClick={this.handleClick}>Auto-Prefix</button>
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
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
