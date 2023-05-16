export function branchInit() {
	const listener = (event, data) => { console.log(event, data); };
	window.branch.addListener(listener);

	window.branch.init('key_live_fdGefNezUn2f4SqsEYE6sljpDwmRPOl2', (err, data) => {
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
