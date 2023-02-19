import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);