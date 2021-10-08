import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './comp';
import reportWebVitals from './reportWebVitals';
import { isLongPoll } from './util';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// hard refresh every 5 mins
const refreshPeriod = (isLongPoll() ? 60 : 5) * 60 * 1000;
setInterval(() => window.location.reload(false), refreshPeriod);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
