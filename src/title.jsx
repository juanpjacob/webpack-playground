import * as React from "react";

import * as styles from "./title.css";

export default function Title({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
