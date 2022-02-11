import "./styles.css";
import React from "react";
import Appbar from "./Components/Appbar";
import Content from "./Components/Content";
import Slider from "./Components/Slider";
import ApiData from "./Components/ApiData";

export default function App() {
  return (
    <div className="App">
      <Appbar />
      <Slider />
      <Content />
      <ApiData />
    </div>
  );
}
