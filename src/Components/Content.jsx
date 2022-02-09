import React from "react";
import Card from "./Card";
import Data from "./Data";

export default function Content() {
  return (
    <div className="content">
      {Data.map((card) => (
        <Card name={card.name} img={card.img} />
      ))}
    </div>
  );
}
