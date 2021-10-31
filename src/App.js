import React from "react";
import SearchEngine from "./SearchEngine";
import Overview from "./Overview";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <br />
      <Overview />
    </div>
  );
}
