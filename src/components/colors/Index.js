import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    closeBranchJourney();
  })

  const closeBranchJourney = () => {
    // close
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
          })
        }, 500)
      }
    });
  }

  return (
    <React.Fragment>
      <h1>COLORS</h1>
      <div className="ui secondary menu">
        <Link to="/colors/red" className="item">
          RED
        </Link>
        <Link to="/colors/blue" className="item">
          BLUE
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Index;