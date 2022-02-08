import "./styles.css";
import React from "react";
import Appbar from "./Components/Appbar";
import MusicCard from "./Components/MusicCard";

export default function App() {
  return (
    <div className="App">
      <Appbar />
      <MusicCard />
    </div>
  );
}
