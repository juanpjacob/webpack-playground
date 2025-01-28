import * as React from "react";

import { textA } from "./utils";
import Title from "./title";

import * as styles from "./card.css";
// import "./card.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <Title>Card heading</Title>
      <p>Description - {textA()}</p>
      <button
        onClick={() => {
          throw new Error("JP");
        }}
      >
        Click me for error!
      </button>
    </div>
  );
}
