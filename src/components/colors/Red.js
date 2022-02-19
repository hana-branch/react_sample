import React, { useEffect } from "react";
import { trackCustomEvent } from '../../Branch';

const Red = () => {
	useEffect(()=>{
		trackCustomEvent("web-custom-event")
	})
  return ( 
  	<h1 className="ui red header">RED</h1>
  );
}

export default Red;