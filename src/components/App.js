import React, { Component } from "react";
import branch from 'branch-sdk';

class App extends Component {
  componentDidMount() {
    branch.closeJourney( err => {
      if (!err) {
        setTimeout(()=> {
          branch.track("pageview")}, 1000)
      }
    });
  }

  render() {
    return (
      <h1>HOME</h1>
    );
  }
}

export default App;