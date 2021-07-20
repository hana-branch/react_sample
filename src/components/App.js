import React from "react";
import { Link } from "react-router-dom";
import Blue from "./colors/Blue";

const App = () => {
	console.log(Blue)
  return ( 
  	<React.Fragment>
  		<h1>HOME</h1> 
  		<a href="https://hotwire.app.link/flex-hotel-search">No Child</a><br/><br/>
  		<Blue>
  			<a href="https://hotwire.app.link/flex-hotel-search">Props Child</a>
  		</Blue>
  	</React.Fragment>
  );
}

export default App;