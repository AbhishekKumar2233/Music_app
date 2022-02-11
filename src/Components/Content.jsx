import React, { lazy, Suspense } from "react";
import Card from "./Card";
import Data from "./Data";
import "../styles.css";

/* wait 1s to render component */
const CustomComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Card")), 1000)
    )
);

export default function Content() {
  return (
    <div className="content">
      <br />
      <Suspense fallback={<div>Loading</div>}>
        {Data.map((card) => (
          <CustomComponent name={card.name} img={card.img} />
        ))}
      </Suspense>
      {/* {Data.map((card) => (
        <Card name={card.name} img={card.img} />
      ))} */}
    </div>
  );
}
