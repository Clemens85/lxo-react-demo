import React from 'react';
import ReactDOM from 'react-dom';
import './mvp.css';
import ExampleApp from './ExampleApp';
import {configureAxiosHttpInterceptors} from "./shared/HttpInterceptorConfig";

// Do this once on startup
configureAxiosHttpInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <ExampleApp />
  </React.StrictMode>,
  document.getElementById('root')
);