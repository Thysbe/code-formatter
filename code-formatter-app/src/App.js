import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const preFixOptions = ["PrefixClassName"];
const defaultOption = preFixOptions[0];

function autoPrefix() {
  console.log("autoprefixing");
}

function App() {
  const [inputText, setInputText] = useState("input text");
  const [inputPrefix, setInputPrefix] = useState("input prefix");
  const [prefixOption, setPrefixOption] = useState(defaultOption);
  const [outputText, setOutputText] = useState("output text");

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-container">
          <form>
            <div className="input-container">
              <div className="flex-col" style={{ width: "20%" }}>
                <Dropdown
                  className="dropdown"
                  options={preFixOptions}
                  //onChange={setPrefixOption(this.value)}
                  value={defaultOption}
                  placeholder="Select an option"
                />
                <div className="flex-row">
                  Prefix:
                  <input type="text" name="prefix" value={inputPrefix} />
                </div>
                <div className="button">
                  <button
                    onClick={autoPrefix(
                      inputText,
                      inputPrefix,
                      prefixOption,
                      setOutputText
                    )}
                  >
                    Auto-Prefix
                  </button>
                </div>
              </div>
              <div className="flex-col" style={{ width: "40%" }}>
                Input:
                <textarea
                  className="text-input-field"
                  name="input"
                  value={inputText}
                  onChange={setInputText}
                ></textarea>
              </div>
              <div className="flex-col" style={{ width: "40%" }}>
                Output:
                <textarea
                  className="text-input-field"
                  name="output"
                  value={outputText}
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
