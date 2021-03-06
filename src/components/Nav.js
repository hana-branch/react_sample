import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/colors" className="item">
        Colors
      </Link>
    </div>
  );
};

export default Nav;