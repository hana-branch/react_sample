export function branchInit() {
	window.branch.init('key_live_XXXXXX', (err, data) => {
	  if (err === null) {
	    console.log(`Data From BRANCH SDK: ${JSON.stringify(data)}`);
	  }
	  else {
	    console.error(`Error From BRANCH SDK: ${JSON.stringify(err)}`);
	  }
	});
}

export function trackCustomEvent(eventName, customData) {
	console.info("trackCustomEvent() have been called");

  window.branch.logEvent(
    eventName,
    customData,
    (err) => {
			if (!err) {
      	console.error(`Error From BRANCH SDK: ${err}`);
			}
    }
  );
}
