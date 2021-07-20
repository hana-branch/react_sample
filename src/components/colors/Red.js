import React, { Component } from "react";
import { trackCustomEvent } from '../../Branch';

class Red extends Component {
  componentDidMount() {
    trackCustomEvent('CUSTOM_EVENT_HELLO', {});
  }

  render() {
    return (
      <h1 className="ui red header">RED</h1>
    );
  }
}

export default Red;