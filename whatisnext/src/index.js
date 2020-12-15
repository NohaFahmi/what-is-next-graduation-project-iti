import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper.js";
import './index.css';
import "antd/dist/antd.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import "/progress-tracker/src/styles/progress-tracker.scss";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

