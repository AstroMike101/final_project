import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col } from 'antd';
const { Search } = Input;
import './index.js';
import './index.css';

import EditProfile from "./EditProfile.js";
import BookMovie from "./BookMovie.js";
import Login from './pages/login_UI/login_UI';
import Registration from './pages/registration_UI/registration_form';
import Confirmation from './pages/registrationConfirmation/registrationConfirmation'
import BookingConfirmation from "./BookingConfirmation.js";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false,
			loginid: 0,
		};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick = () => {
		this.setState({ login: true })
	}
	handleLogoutClick = () => {
		this.setState({ login: false })
	}


	truncate = (str) => {
		if (str.length >= 500) {
			return str.substring(0, 500) + "...";
		}
		return str
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<div>
						<Navbar state={this.state} loginfunc={this.handleLoginClick} logoutfunc={this.handleLogoutClick} />
					</div>

					<Routes>
						<Route path="/" element={<Home props={this.props} />} exact>
						</Route>
						<Route path="/editprofile" element={<EditProfile />}>
						</Route>
						<Route path="/booking" element={<BookMovie />}>
						</Route>
						<Route path="/booking/confirmation" element={<BookingConfirmation />}>
						</Route>
						<Route path="/register" element={<Registration />}>
						</Route>
						<Route path="/register/confirmation" element={<Confirmation />}>
						</Route>
						<Route path="/login" element={<Login handleLoginClick={this.handleLoginClick} props={this.props} />}>
						</Route>
					</Routes>
				</React.Fragment>
			</Router>
		)
	}
}
function Home(props) {
	{/* todo make this not scuffed with a Movies component*/ }
	return (
		<div class="movie-display">
			<div class="search-display">
				<div>Search movies...</div>
				<Search
					placeholder="input search text"
					allowClear
					style={{
						width: 340,
					}}
				/>
				<Select
					defaultValue={'All ages'}
					style={{
						width: 120,
					}}
					options={[
						{
							value: 'All ages',
							label: 'All ages',
						},
						{
							value: 'Children',
							label: 'Children',
						},
						{
							value: 'Teens',
							label: 'Teens',
						},
						{
							value: 'Adults',
							label: 'Adults',
						},
					]}
				/>
				<DatePicker />
			</div>
			<div class="section-title">NOW SHOWING</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div class="movie-details">Rated PG-13</div>
					<div class="movie-details">Next showtime at 8:00 PM EST</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<NavLink to="/booking" style={{ textDecoration: 'none' }}><Button type="primary">Book tickets now</Button></NavLink>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div class="movie-details">Rated PG-13</div>
					<div class="movie-details">Next showtime at 8:00 PM EST</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<NavLink to="/booking" style={{ textDecoration: 'none' }}><Button type="primary">Book tickets now</Button></NavLink>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div class="movie-details">Rated PG-13</div>
					<div class="movie-details">Next showtime at 8:00 PM EST</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<NavLink to="/booking" style={{ textDecoration: 'none' }}><Button type="primary">Book tickets now</Button></NavLink>
				</div>
			</div>
			<div class="section-title">UPCOMING MOVIES</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div class="movie-details">Rated MA</div>
					<div class="movie-details">Showtimes start on 4/20/2023</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div class="movie-details">Rated MA</div>
					<div class="movie-details">Showtimes start on 4/20/2023</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div class="movie-details">Rated MA</div>
					<div class="movie-details">Showtimes start on 4/20/2023</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
		</div>
	)
}


// loll?????
function Navbar(props) {
	let navbutton1;
	let navbutton2;

	if (props.state.login) {
		navbutton1 = <NavLink to="/editprofile" style={{ textDecoration: 'none' }}><div class="navbutton">Edit Profile</div></NavLink>
		navbutton2 = <div onClick={props.logoutfunc} class="navbutton">Logout</div>
	} else {
		navbutton1 = <NavLink to="/register" style={{ textDecoration: 'none' }}><div class="navbutton">Register</div></NavLink>;
		navbutton2 = <NavLink to="/login" style={{ textDecoration: 'none' }}><div class="navbutton">Login</div></NavLink>;
	}

	return (
		<div class="navbar">
			<div class="navbar-sub">
				<NavLink to="/" style={{ textDecoration: 'none' }}><div class="title">CinE Booking</div></NavLink>
			</div>
			<div class="navbar-sub">
				{navbutton1}
				{navbutton2}
			</div>
		</div>
	)
}

export default App;