import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img alt={props.name} src={props.img} />
      <h2>{props.name}</h2>
    </div>
  );
}
