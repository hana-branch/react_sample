import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './Routes';
import { branchInit } from './Branch';

if (module.hot) {
  module.hot.accept();
}

render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.querySelector('#root')
);

branchInit();