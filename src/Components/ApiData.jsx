import React, { useState } from "react";

export default function DataApi() {
  const [done, setDone] = useState(undefined);

  fetch("https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "theaudiodb.p.rapidapi.com",
      "x-rapidapi-key": "839aaf495emsh1e22e2e909b5777p100c34jsna3a6c48b3a2a"
    }
  })
    .then((response) => {
      // console.log(response);
      setDone(response);
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <div>
      <h1>hyy</h1>
      {console.log(done)}
      {/* <h1>{done.type}</h1> */}
      
      <audio controls autoplay muted>
        <source src={done?.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
