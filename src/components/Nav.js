import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="ui main text container">
    <nav className="ui fixed inverted menu">
      <div className="branch-journeys-top"></div>
      <div className="ui container">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/colors" className="item">Colors</Link>
      </div>
    </nav>
  </div>
  );
};

export default Nav;