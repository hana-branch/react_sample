import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
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