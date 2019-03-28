import React from "react";
import { message } from "antd";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import UploadZone from "./components/UploadZone";
import ResultZone from "./components/ResultZone";
import CFG from "./firebase-config";
import "antd/dist/antd.css";
import "./App.css";

console.log(CFG);
const App = () => (
  <FirebaseDatabaseProvider firebase={firebase} {...CFG}>
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
        <UploadZone
          className="app__upload-zone"
          props={{
            name: "file",
            multiple: false,
            action: "//jsonplaceholder.typicode.com/posts/",
            onChange(info) {
              const status = info.file.status;
              if (status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (status === "done") {
                message.success(
                  `${info.file.name} file uploaded successfully.`
                );
              } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
              }
            }
          }}
        />
        <ResultZone className="app__result-zone" />
      </main>
    </div>
  </FirebaseDatabaseProvider>
);

export default App;
