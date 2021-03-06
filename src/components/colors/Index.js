import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
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
    <React.Fragment>
      <h1 className="ui grey header">COLORS</h1>
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