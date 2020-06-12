import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {};
  render() {
    return (
      <main class="container">
        <Counters />
      </main>
    );
  }
}

export default App;
