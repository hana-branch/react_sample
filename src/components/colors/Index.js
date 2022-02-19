import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { branchInit } from '../../Branch';

const Index = () => {
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