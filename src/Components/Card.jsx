import React from "react";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img alt={props.name} src={props.img} />
        <h2>{props.name}</h2>
      </div>
      {/* <div className="card-hidden">
        <button id="button">
          <PlayCircleFilledWhiteIcon />
        </button>
      </div> */}
    </>
  );
}
