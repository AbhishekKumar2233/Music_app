import "./styles.css";
import React from "react";
import Appbar from "./Components/Appbar";
import Content from "./Components/Content";

export default function App() {
  return (
    <div className="App">
      <Appbar />
      <Content />
    </div>
  );
}
