import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);


