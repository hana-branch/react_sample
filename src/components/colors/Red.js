import React, { Component } from "react";
import branch from 'branch-sdk';

class Red extends Component {
  componentDidMount() {
    branch.closeJourney( err => {
      console.log("RED")
      if (!err) {
        setTimeout(()=> {
          branch.track("pageview")}, 1000)
      }
    });
  }

  render() {
    return (
      <h1 className="ui red header">RED</h1>
    );
  }
}

export default Red;