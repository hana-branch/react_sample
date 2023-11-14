import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    //   closeBranchJourney();
    // }, 300);
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
        }, 700)
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