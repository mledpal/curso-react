/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';

import { CounterApp } from './CounterApp';

import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>        
        <CounterApp value = { 0 }/> 
    </React.StrictMode>
)