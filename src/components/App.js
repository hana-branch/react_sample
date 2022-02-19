import React, { useEffect } from 'react';
import { branchInit } from '../Branch';

const App = () => {
  useEffect(() => {
    closeBranchJourney()
  })

  const closeBranchJourney = () => {
    // close
    window.branch.closeJourney((err) => {
      console.log("Branch SDK closeJourney :", err)
      if (!err) {
        setTimeout(() => {
          // reopen
          window.branch.track("pageview", (err) => {
            console.log("Branch SDK track pageview :", err)
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