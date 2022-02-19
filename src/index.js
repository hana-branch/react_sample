import branch from 'branch-sdk'
import { branchInit } from './Branch'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Routes />,
  document.querySelector('#root')
);

branchInit()