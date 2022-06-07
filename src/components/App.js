import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    closeBranchJourney();
  })

  const closeBranchJourney = () => {
    // close
    window.branch.closeJourney((err) => {
      if (err) {
        console.error("Error From Branch SDK", err);
      }
      else {
        setTimeout(() => {
          // reopen
          window.branch.track("pageview", (err) => {
            if (err) {
              console.error("Error From BRANCH SDK", err);
            }
          })
        }, 700)
      }
    })
  }

  return ( 
  	<React.Fragment>
  		<h1>HOME</h1>
  	</React.Fragment>
  );
}

export default App;