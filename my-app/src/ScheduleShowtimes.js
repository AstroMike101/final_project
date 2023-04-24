import React, { useState, useEffect } from 'react';
import { Button, Space, Form, Input, DatePicker, RangePicker, message } from 'antd';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { ref, push, child, update, getDatabase, onValue, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { database } from './firebase_setup/firebase.js'

import './index.css';
import './pages/registration_UI/style.css';

function ScheduleShowtimes(props) {
	const handleSubmit = (values) => {
		// Duplication check
		const thisMovieShowtimes = props.state.showtimes.filter((showtimes) => { if (showtimes.movieid == values.movieid) return showtimes; })
		var isDuplicate = false;
		var curShowtime = new Date(values.showtime.$d.toJSON()) // fuck off javascript
		var movieDuration;
		props.state.movies.map((movies) => { 
			if (movies.movieid == values.movieid) {
				movieDuration = movies.movie_duration
			}; 
		})
		thisMovieShowtimes.map((showtimes) => {
			var otherShowtime = new Date(showtimes.showtimeJSDate)
			if (
				/*showtimes.showtimeMonth == values.showtime.$M &&
				showtimes.showtimeDay == values.showtime.$D &&
				showtimes.showtimeYear == values.showtime.$y &&
				showtimes.showtimeHour == values.showtime.$H &&
				showtimes.showtimeMinute == values.showtime.$m*/

				((otherShowtime.getTime() <= curShowtime.getTime()) && (otherShowtime.getTime() + (movieDuration*60*60*1000)) >= curShowtime.getTime()) ||
				((curShowtime.getTime() <= otherShowtime.getTime()) && (curShowtime.getTime() + (movieDuration*60*60*1000)) >= otherShowtime.getTime())
			) {
				message.error("Cannot schedule overlapping showtimes!")
				console.log(otherShowtime.getTime())
				console.log(curShowtime.getTime())
				isDuplicate = true
			}
		})

		if (isDuplicate) return;
		console.log(values)
		const newPostKey = push(child(ref(database), 'posts')).key;
		const db = getDatabase();
		set(ref(db, 'showtimes/' + newPostKey), {
			movieid: values.movieid,
			showtimeMonth: values.showtime.$M + 1, // lol?????????????????
			showtimeDay: values.showtime.$D,
			showtimeYear: values.showtime.$y,
			showtimeHour: values.showtime.$H,
			showtimeMinute: values.showtime.$m,
			showtimeJSDate: values.showtime.$d.toJSON()
		})
			.then(() => {
				message.success("Added new showtime for " + values.moviename)
			})
			.catch((error) => {
				message.error(error.message)
			})
	}
	return (
		<div className='showtimes'>
			<NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink>
			{props.state.movies.map((movie) => {
				return (
					<div className="form" key = {movie.movieid}>
						<div class="section-title">{movie.movie_name}</div>
						<Form
							name=""
							style={{
								maxWidth: 700,
							}}
							onFinish={handleSubmit}
							autoComplete="off"
							method='POST'
							scrollToFirstError
						>

							<Form.Item name = "movieid" initialValue={movie.movieid} hidden = {true}></Form.Item>
							<Form.Item name = "moviename" initialValue={movie.movie_name} hidden = {true}></Form.Item>
							<Form.Item
								name="showtime"
								rules={[
									{
										required: true,
										message: "Please input a showtime",
									},
								]}
							>
								<DatePicker showTime />
							</Form.Item>
							<div className="form-row">
								<Button type="primary" htmlType="submit">
									Add showtime
								</Button>
							</div>
						</Form>
						<div className = "showtimes">
							<div className="section-title-minor">Showtimes for this movie:</div>
							{props.state.showtimes.map((showtime) => {
								if (showtime.movieid == movie.movieid) {
									return (
										<div key = {showtime.showtimeJSDate}>{showtime.showtimeMonth + '/' + showtime.showtimeDay + '/' + showtime.showtimeYear + ', ' + showtime.showtimeHour + ':' + showtime.showtimeMinute}</div>
									)
								}
							})}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default ScheduleShowtimes;