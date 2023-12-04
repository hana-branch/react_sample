import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      closeBranchJourney();
    }, 250);
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
          console.info("[branch.io] pageview is called");
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
  		<h1>HOME</h1>
  	</React.Fragment>
  );
}

export default App;