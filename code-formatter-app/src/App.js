import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import AutoPrefixView from "./AutoPrefixView";

const preFixOptions = ["PrefixClassName"];
const defaultOption = preFixOptions[0];

function autoPrefix(inputText, inputPrefix, prefixOption, setOutputText) {
  setOutputText("123");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AutoPrefixView />
      </header>
    </div>
  );
}

export default App;
