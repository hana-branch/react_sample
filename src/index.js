import branch from 'branch-sdk';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Routes />,
  document.querySelector('#root')
);

branch.init('key_live_fdGefNezUn2f4SqsEYE6sljpDwmRPOl2', function(err, data) {
  if (err == null) {
    console.log(data);
  }
  else {
    console.log("BRANCH ERROR : " + JSON.stringify(err));
  }
});

var listener = function(event, data) { console.log(event, data); };
branch.addListener(listener);