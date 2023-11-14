import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { trackCustomEvent } from '../../Branch';

const Red = () => {
	useEffect(()=>{
		trackCustomEvent("web-custom-event");
	})
  return (
		<React.Fragment>
		<h1 className="ui red header">RED</h1>
		<Link to="/colors">Go Back</Link>
	</React.Fragment>
  );
}

export default Red;