import React from "react";

export default function Card() {
  return (
    <div>
      <img
        alt=""
        src="data:image/jpeg;base64,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"
      />
      <h2>Srivalli</h2>
    </div>
  );
}
