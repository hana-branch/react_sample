export function branchInit() {
	// const listener = (event, data) => { console.log(event, data); };
	// window.branch.addListener(listener);

	window.branch.init('key_live_fdGefNezUn2f4SqsEYE6sljpDwmRPOl2', (err, data) => {
	  if (err === null) {
	    console.log(`[branch.io] BRANCH SDK successfully initialized: ${JSON.stringify(data)}`);
	  }
	  else {
	    console.error(`[branch.io] Branch SDK initialization fails: ${JSON.stringify(err)}`);
	  }
	});
}

export function trackCustomEvent(eventName, customData = null) {
  window.branch.logEvent(
    eventName,
    customData,
    (err) => {
			if (err) {
      	console.error(`[branch.io] Fails to track the custom event "${eventName}": ${err}`);
			}
    }
  );
}
