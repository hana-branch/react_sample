export function branchInit() {
	window.branch.init('key_live_fdGXXX', (err, data) => {
	  if (err === null) {
	    console.log(data);
	  }
	  else {
	    console.log(`BRANCH INIT ERROR : ${JSON.stringify(err)}`);
	  }
	});
}

export function trackCustomEvent(eventName, customData) {
	console.log("trackCustomEvent() have been called");

  window.branch.logEvent(
    eventName,
    customData,
    (err) => {
      console.log(`BRANCH CUSTOM EVENT ERROR : ${err}`);
    },
  );
}
