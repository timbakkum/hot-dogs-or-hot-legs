import React from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";

const ResultZone = ({ className }) => {
  return (
    <FirebaseDatabaseNode path="bdt">
      {wgatever => (
        <div className={className}>
          <pre>{JSON.stringify(wgatever)}</pre>
          <h2>Hier komt het resultaat</h2>
        </div>
      )}
    </FirebaseDatabaseNode>
  );
};

export default ResultZone;
