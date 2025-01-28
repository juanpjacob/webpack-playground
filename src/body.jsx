import * as React from "react";

import * as styles from "./body.css";

const Lorem = React.lazy(() => import("./lorem"));

export default function Body() {
  const [showLorem, setShowLorem] = React.useState(false);

  return (
    <div className={styles.body}>
      <button onClick={() => setShowLorem(true)}>Show Lorem</button>
      {showLorem && (
        <React.Suspense>
          <Lorem />
        </React.Suspense>
      )}
    </div>
  );
}
