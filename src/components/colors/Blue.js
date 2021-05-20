import React, { Component } from "react";
import branch from 'branch-sdk';

class Blue extends Component {
  componentDidMount() {
    branch.closeJourney( err => {
      console.log("BLUE")
      if (!err) {
        setTimeout(()=> {
          branch.track("pageview")}, 1000)
      }
    });
  }

  render() {
    return (
      <h1 className="ui blue header">BLUE</h1>
    );
  }
}

export default Blue;