import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

const Blue = () => {
  useEffect(() => {
    // closeBranchJourney();
  })

  const closeBranchJourney = () => {
    // close
    console.info("[branch.io] closeJourney is called");
    window.branch.closeJourney((err) => {
      if (err) {
        console.error("[branch.io] Fails to close the Journey: ", err);
      }
      else {
        setTimeout(() => {
          // reopen
          window.branch.track("pageview", (err) => {
            if (err) {
              console.error("[branch.io] Fails to show the Journey:", err);
            }
          });
        }, 700);
      }
    });
  }

  return (
    <React.Fragment>
      <h1 className="ui blue header">BLUE!</h1>
      <Link to="/colors">Go Back</Link>
    </React.Fragment>
  );
}

export default Blue;