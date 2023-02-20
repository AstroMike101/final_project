import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import './index.js';
import './index.css';

import Browse from './Browse';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryFilter: "All",

			login: true,
			loginid: 0,
		};
	}

	truncate = (str) => {
		if (str.length >= 500) {
			return str.substring(0, 500) + "...";
		}
		return str
	}

	updateCategory = (tab) => {
		this.setState(state => {
			return {
				categoryFilter: tab
			}
		})
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<div>
						<Navbar state={this.state} />
					</div>

					<Routes>
						<Route path="/" element={<Home props={this.props} />} exact>
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
			<div class="section-title">NOW SHOWING</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<div class="book-button">BOOK NOW</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<div class="book-button">BOOK NOW</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/hebWYacbdvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">The Flash</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
					<div class="book-button">BOOK NOW</div>
				</div>
			</div>
			<div class="section-title">UPCOMING MOVIES</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
			<div class="movie">
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/yjRHZEUamCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				</div>
				<div class="movie-description">
					<div class="movie-title">John Wick: Chapter 4</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae finibus enim, at tempus arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ac turpis non augue accumsan varius. Nunc laoreet risus pellentesque nisi lacinia tempor. Donec ut nisi eget nunc sodales tincidunt. Pellentesque bibendum dapibus ligula nec consectetur. Donec eu dui tortor. Suspendisse rhoncus sagittis est, at commodo turpis tincidunt id.</div>
				</div>
			</div>
		</div>
	)
}


// loll?????
function Navbar(props) {
	if (props.state.login) {
		return (
			<div class="navbar">
				<div class="navbar-sub">
					<div class="title ">CinE Booking</div>
					{/*<NavLink to="/browse" style={{ textDecoration: 'none' }}>
						<div class="navbutton">Browse</div>
					</NavLink>*/}
					<Dropdown title="Tag" tag={props.tag} updateTab={props.updateCategory} list={["1", "2", "3"]} />
				</div>
				<div class="navbar-sub">
					<div>Edit Profile</div>
					<div>Logout</div>
				</div>
			</div>
		)
	} else {
		return (
			<div class="navbar">
				<div class="navbar-sub">
					<div class="title ">CinE Booking</div>
					<NavLink to="/browse" style={{ textDecoration: 'none' }}>
						<div class="navbutton">Browse</div>
					</NavLink>
				</div>
				<div class="navbar-sub">
					<div>Login</div>
					<div>Register</div>
				</div>
			</div>
		)
	}
}

function Dropdown(props) {
	function tabClicked (title, index, m) {
		props.filter(title, index);
		props.updateTab(m)
	}

	return (
		<div>
			<button class="relative w-44 flex flex-row jutify-center items-center bg-white text-gray-600 rounded  shadow group">
				<p class="px-4 w-2/3 text-left ml-2">{props.tag}</p>
				<div class="p-2 ">
					<svg
						class="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</div>
				<div class="absolute top-full hidden group-focus:block min-w-full w-max bg-white shadow-md mt-1 rounded">
					<ul class="text-left border rounded">
						{props.list.map((m, index) => {
          					return (
            					<>
									<li class="px-4 py-1 hover:bg-gray-100 border-b" onClick = {() => tabClicked(props.title, index, m)}>{m}</li>
								</>
          					);
        				})}	
					</ul>
				</div>
			</button>
		</div>
	);
}

export default App;