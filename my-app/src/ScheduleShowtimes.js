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
		console.log(values)
		const newPostKey = push(child(ref(database), 'posts')).key;
		const db = getDatabase();
		set(ref(db, 'showtimes/' + newPostKey), {
			movieid: values.movieid,
			showtimeMonth: values.showtime.$M,
			showtimeDay: values.showtime.$D,
			showtimeYear: values.showtime.$y,
			showtimeHour: values.showtime.$H,
			showtimeMinute: values.showtime.$m
		})
			.then(() => {
				message.success("Added new showtime for " + values.moviename)
			})
			.catch((error) => {
				message.error(error.message)
			})
	}
	return (
		<div>
			{props.state.movies.map((movie) => {
				return (
					<div className="form">
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

					</div>
				)
			})}
		</div>
	)
}

export default ScheduleShowtimes;