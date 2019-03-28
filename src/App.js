import React, { Component } from "react";
import UploadZone from "./UploadZone";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <span role="img" aria-label="hotdog">
              🌭
            </span>{" "}
            or{" "}
            <span role="img" aria-label="hot legs">
              🦵🦵
            </span>
          </h1>
        </header>

        <UploadZone />
      </div>
    );
  }
}

export default App;
