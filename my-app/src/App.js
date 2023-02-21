import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './index.js';
import './index.css';

import Login from './pages/login_UI/login_UI';
import Registration from './pages/registration_UI/registration_form';
import Confirmation from './pages/registrationConfirmation/registrationConfirmation'

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
		<Confirmation></Confirmation>
		)
	}
}

export default App;