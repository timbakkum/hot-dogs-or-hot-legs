import React from "react";
import UploadZone from "./components/UploadZone";
import ResultZone from "./components/ResultZone";
import CFG from "./firebase-config";
import "./App.css";

const firebase = require("firebase/app");
require("firebase/database");
require("firebase/storage");

firebase.initializeApp(CFG);
const storage = firebase.storage();

const App = () => (
  <div className="app">
    <header className="app__header">
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
    <main className="app__main">
      <UploadZone className="app__upload-zone" storage={storage} />
      <ResultZone className="app__result-zone" />
    </main>
  </div>
);

export default App;
