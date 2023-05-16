import React, { useEffect } from "react";

const Blue = () => {
  useEffect(() => {
    closeBranchJourney()
  })

  const closeBranchJourney = () => {
    // close
    window.branch.closeJourney((err) => {
      if (!err) {
        setTimeout(() => {
          // reopen
          window.branch.track("pageview", (err) => { 
            if (err) {
              console.error("Error From BRANCH SDK:", err);
            }
          })
        }, 700)
      }
      else {
        console.error("Error From BRANCH SDK:", err);
      }
    })
  }

  return ( 
  	<h1 className="ui blue header">BLUE!</h1>
  );
}

export default Blue;