import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './index.js';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false,
			loginid: 0,
		};
	}

	render () {
		return (
			<div>
				<div class = "navbar">
					<div class = "navbar-sub">
						<div class = "title ">CinE Booking</div>
						<div>Browse</div>
						<div>Search</div>
					</div>
					<div class = "navbar-sub">
						<div>Login</div>
						<div>Register</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;