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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import "/progress-tracker/src/styles/progress-tracker.scss";
import App from './App';
const login = localStorage.getItem('auth_token');
ReactDOM.render(
  <React.StrictMode>
    <App isLogin={(login !== undefined)? true : false}/>
  </React.StrictMode>,
  document.getElementById('root')
);

