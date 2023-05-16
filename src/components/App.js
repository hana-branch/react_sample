import React, { useEffect } from 'react';

const App = () => {
  console.log("APP Component Start")
  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      closeBranchJourney();
    }, 200);
  })

  const closeBranchJourney = () => {
    // close
    window.branch.closeJourney((err) => {
      console.log("Call close Journey")
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
        }, 200)
      }
    });
  }

  console.log("TEST")

  return ( 
  	<React.Fragment>
  		<h1>HOME</h1>
  	</React.Fragment>
  );
}

export default App;