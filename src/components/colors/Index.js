import React, { Component } from "react";
import { Link } from 'react-router-dom';
import branch from 'branch-sdk';

class Index extends Component {
  componentDidMount() {
    branch.closeJourney( err => {
      console.log("COLORS")
      if (!err) {
        setTimeout(()=> {
          branch.track("pageview")}, 1000)
      }
    });
  }

  render() {
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
}

export default Index;