import './index.js';
import './index.css';
import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col, message, Empty } from 'antd';

import { database } from './firebase_setup/firebase.js'
import { ref, push, child, update, getDatabase, onValue, get } from "firebase/database";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

import AddMovies from './addmovies.js';
import EditProfile from "./EditProfile.js";
import BookMovie from "./BookMovie.js";
import Login from './pages/login_UI/login_UI';
import Registration from './pages/registration_UI/registration_form';
import Confirmation from './pages/registrationConfirmation/registrationConfirmation'
import BookingConfirmation from "./BookingConfirmation.js";
import AdminPortal from './pages/adminPortal/adminPortal';
import PromotionAdd from './PromotionAdd.js';
import ManageMovies from './ManageMovies.js';
import ForgotPassword from './ForgotPassword.js';
import AdminLoginPage from './adminLoginPage.js';
import ScheduleShowtimes from './ScheduleShowtimes.js';
import Header from './header.js';
import CheckOutPage from './CheckOutPage.js'
import OrderHistory from './OrderHistory.js';
const { Search } = Input;

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const curUser = auth.currentUser;

const db = getDatabase();
const userRef = ref(db, 'users');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: false,
			loginid: 0,
			loginemail: '',
			userIsAdmin: false,

			movies: [],
			showtimes: [],
			promocodes: [],

			curOrder: [],

			orders: [], // i have no time to make this any less stupid
		};
		//this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.changeLoginState = this.changeLoginState.bind(this);
		this.changeCurrentOrder = this.changeCurrentOrder.bind(this);
	}

	/*handleLoginClick = () => {
		this.setState({ login: false })
	}*/
	componentDidMount() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uemail = user.email;
				const uid = user.uid;
				let isAdmin = false;

				const dbRef = ref(getDatabase());
				get(child(dbRef, `users/${uid}`)).then((snapshot) => {
					if (snapshot.exists()) {
						this.setState((state) => {
							return {
								userIsAdmin: snapshot.val().isAdmin,
							}
						})
					}
				}).catch((error) => {
					console.error(error);
				});
				this.setState((state) => {
					return {
						loginid: uid,
						loginemail: user.email,
						login: true
					}
				})
				//message.success("Signed in as " + uemail)
			} else {
				this.setState((state) => {
					return {
						loginid: 0,
						loginemail: '',
						login: false
					}
				})
				//message.error("DEBUG: Not signed in")
			}
		});

		onValue(ref(db, 'movies'), (snapshot) => {
			/*this.setState((state) => {
				return {
					movies: [],
				}
			})*/
			const data = snapshot.val();
			var moviestemp = [];
			//console.log(data);
			if (snapshot.val()) {
				Object.values(data).forEach((val) => {
					//console.log(val)
					moviestemp = [...moviestemp, val]
					this.setState({
						movies: moviestemp,
					})
				});
			}
			//console.log(moviestemp)
		});
		onValue(ref(db, 'showtimes'), (snapshot) => {
			const data = snapshot.val();
			var showtimestemp = [];
			if (snapshot.val()) {
				Object.values(data).forEach((val) => {
					showtimestemp = [...showtimestemp, val]
					this.setState({
						showtimes: showtimestemp,
					})
				});
			}
		});
		onValue(ref(db, 'orders'), (snapshot) => {
			const data = snapshot.val();
			var orderstemp = [];
			if (snapshot.val()) {
				Object.values(data).forEach((val) => {
					orderstemp = [...orderstemp, val]
					this.setState({
						orders: orderstemp,
					})
				});
			}
		});
		onValue(ref(db, 'promotions'), (snapshot) => {
			const data = snapshot.val();
			var promostemp = [];
			if (snapshot.val()) {
				Object.values(data).forEach((val) => {
					promostemp = [...promostemp, val]
					this.setState({
						promocodes: promostemp,
					})
				});
			}
		});
		//console.log(this.state)
	}

	handleLogoutClick = () => {
		this.setState({ login: false, loginid: 0, userIsAdmin: false })
		signOut(auth).then(() => {
			message.success("Signed out")
		}).catch((error) => {
			message.error(error.message)
		});
	}

	changeLoginState = (status, uid) => {
		this.setState(state => {
			return {
				login: status,
				loginid: uid,
			}
		})
	}

	changeCurrentOrder = (order) => {
		this.setState(state => {
			return {
				curOrder: order,
			}
		})
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
						<Route path="/" element={<Home props={this.props} state={this.state} changeQuery={this.changeQuery} />} exact>
						</Route>
						<Route path="/editprofile" element={<EditProfile state={this.state} />}>
						</Route>
						<Route path="/admin/addmovies" element={<AddMovies />}>
						</Route>
						<Route path="/admin/scheduleshowtimes" element={<ScheduleShowtimes state={this.state} />}>
						</Route>
						<Route path="/admin" element={<AdminPortal />}>
						</Route>
						<Route path="/adminPage" element={<AdminLoginPage />}>
						</Route>




						<Route path="/booking/:id" element={<BookMovie state={this.state} changeCurrentOrder={this.changeCurrentOrder} />}>
						</Route>
						<Route path="/admin/PromotionAdd" element={<PromotionAdd />}>
						</Route>

						{/* <Route>
							<Route path="/adminLogin" element={<adminLogin />}></Route>
						</Route> */}
						<Route path="/ManageMovies" element={<ManageMovies />}>
						</Route>

						<Route path="/booking/confirmation/:id" element={<BookingConfirmation />}>
						</Route>
						<Route path="/register" element={<Registration />}>
						</Route>
						<Route path="/register/confirmation" element={<Confirmation />}>
						</Route>
						<Route path="/login" element={<Login handleLoginClick={this.handleLoginClick} props={this.props} changeLoginState={this.changeLoginState} />}>
						</Route>

						<Route path="/login/forgotpassword" element={<ForgotPassword />}>
						</Route>

						<Route path="/booking/checkout/:id" element={<CheckOutPage currentOrder={this.state.curOrder} curUser={this.state.loginid} promocodes = {this.state.promocodes} />}>
						</Route>

						<Route path="/orderhistory" element={<OrderHistory orders={this.state.orders} curUser={this.state.loginid} />}></Route>


					</Routes>
				</React.Fragment>
			</Router>
		)
	}
}
function register() {
	return (
		<div className="App">
			<Header />
			<Registration />
		</div>
	);
}

function Home(props) {
	{/* todo make this not scuffed with a Movies component*/ }
	const [query, setQuery] = useState("")
	const [filter, setFilter] = useState("All genres")
	const moviesList = props.state.movies
	//let newQuery = ''

	const onSearch = (value) => {
		const newQuery = value.toLowerCase();
		//console.log("newQuery in onSearch: " + newQuery)
		setQuery(newQuery)
	}

	const onFilterChange = (value) => {
		setFilter(value)
		console.log(value)
	}

	var movieExists = false;
	var empty = <Empty />;

	return (
		<div class="movie-display">
			<div class="search-display">
				<div>Search movies...</div>
				<Search
					placeholder="Movie title"
					onSearch={onSearch}
					allowClear
					style={{
						width: 340,
					}}
				/>
				<Select
					defaultValue={'All genres'}
					onChange={onFilterChange}
					style={{
						width: 150,
					}}
					options={[
						{
							value: 'All genres',
							label: 'All genres',
						},
						{
							value: 'Action',
							label: 'Action',
						},
						{
							value: 'Adventure',
							label: 'Adventure',
						},
						{
							value: 'Comedy',
							label: 'Comedy',
						},
						{
							value: 'Drama',
							label: 'Drama',
						},
						{
							value: 'Horror',
							label: 'Horror',
						},
						{
							value: 'Nonfiction',
							label: 'Nonfiction',
						},
						{
							value: 'Romance',
							label: 'Romance',
						},
						{
							value: 'Other',
							label: 'Other',
						},
					]}
				/>
				{/*<DatePicker />*/}
			</div>
			<div class="section-title">NOW SHOWING</div>
			{moviesList.filter((movie) => {
				// there's probably a better way to write this logic but my presentation is in 4 hours and i don't care anymore
				if (query === '') {
					if (filter === 'All genres' || filter === movie.movie_category) {
						empty = <></>;
						return movie
					}
				} else if (movie.movie_name.toLowerCase().includes(query)) {
					if (filter === 'All genres' || filter === movie.movie_category) {
						empty = <></>;
						return movie
					}
				}
			}).map((movie) => {
				return <div class="movie">
					<div>
						<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + movie.movie_trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
					<div class="movie-description">
						<div class="movie-title">{movie.movie_name}</div>
						<div class="movie-details">Rated {movie.movie_rating_code}</div>
						<div class="movie-details">{movie.movie_category}</div>
						<div>{movie.movie_synopsis}</div>
						<NavLink to={"/booking/" + movie.movieid} style={{ textDecoration: 'none' }}><Button type="primary">Book tickets now</Button></NavLink>



					</div>
				</div>
			})}
			{empty}
			{/*<div class="movie">
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
		</div>*/}
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

			{/*<NavLink to="/admin" style={{ textDecoration: 'none' }}><Button type="primary">Login as admin</Button></NavLink>*/}
		</div>
	)
}


// loll?????
function Navbar(props) {
	let navbutton1;
	let navbutton2;
	let navbutton3 = <></>
	let navbutton4;
	// Uncomment when schema is actually complete
	/*onValue(userRef, (snapshot) => {
		const data = snapshot.val();
		console.log(data);
		Object.values(data).forEach((val) => {
			if (curUser.uid == val['uid'] && val['isAdmin'] == true){
				navbutton3 = <NavLink to="/admin" style={{ textDecoration: 'none' }}><div class="navbutton">Admin Dashboard</div></NavLink>;
			}
		});
	});*/

	//const userId = props.state.loginid;

	//console.log(props.state)


	if (props.state.login) {
		navbutton4 = <NavLink to="/orderhistory" style={{ textDecoration: 'none' }}><div class="navbutton">Order History</div></NavLink>
		navbutton1 = <NavLink to="/editprofile" style={{ textDecoration: 'none' }}><div class="navbutton">Edit Profile</div></NavLink>
		navbutton2 = <NavLink to="/" style={{ textDecoration: 'none' }}><div onClick={props.logoutfunc} class="navbutton">Logout</div></NavLink>
	} else {
		navbutton4 = <></>
		navbutton1 = <NavLink to="/register" style={{ textDecoration: 'none' }}><div class="navbutton">Register</div></NavLink>;
		navbutton2 = <NavLink to="/login" style={{ textDecoration: 'none' }}><div class="navbutton">Login</div></NavLink>;
	}

	if (props.state.userIsAdmin) {
		navbutton3 = <NavLink to="/admin" style={{ textDecoration: 'none' }}><div class="navbutton">Admin Dashboard</div></NavLink>;
	} else {
		navbutton3 = <></>
	}

	return (
		<div class="navbar">
			<div class="navbar-sub">
				<NavLink to="/" style={{ textDecoration: 'none' }}><div class="title">CinE Booking</div></NavLink>
			</div>
			<div class="navbar-sub">
				{navbutton3}
				{navbutton4}
				{navbutton1}
				{navbutton2}
			</div>
		</div>
	)
}

export default App;