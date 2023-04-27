import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, useLocation } from 'react-router-dom';
import { Modal, Button, Form, Input, Select } from 'antd';
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { ref, push, child, update, getDatabase, onValue, get, set } from "firebase/database";
import { database } from './firebase_setup/firebase.js'
import './index.css';

function BookingConfirmation(props) {
	const {state} = useLocation();
	const {order} = state
	const secretPass = "XkhZG4fW2t2W"; // lol
    const params = useParams();
	const [orderInfo, setOrderInfo] = useState({})
	useEffect(() => {
		//console.log("FUCK!!!")
		console.log(state)
	}, [])
	return (
		<div class="booking-display">
			<div class="section-title">Thank you for your purchase!</div>
			<div class="section-title-minor">Order Summary</div>

			<div class="section-title-but-even-more-minor">Movie: {order.moviename}</div>
			<div class="section-title-but-even-more-minor">Showtime: {order.showtimestr}</div>
			<div class="section-title-but-even-more-minor">Tickets: {order.tickets.toString()}</div>
			<div class="section-title-but-even-more-minor">Seats: {order.seats.toString()}</div>
			<div class="section-title-but-even-more-minor">Total: ${order.pricetotal}</div>

			<div class="section-title-minor">A receipt has been sent to your email address.</div>

			<NavLink to="/" style={{ textDecoration: 'none' }}>
				<Button type="primary">
					Return home
				</Button>
			</NavLink>
		</div>
	)
}

/*const BookingConfirmation = ({ data, visible, onClose }) => {
	return (
		<Modal
			visible={visible}
			onCancel={onClose}
			footer={[
				<Button key="back" onClick={onClose}>
					Return
				</Button>,
				<Button key="submit" type="primary" onClick={onClose}>
					Confirm
				</Button>,
			]}
		>
			<h2>Order Confirmation</h2>
			<p>Thank you for your purchase!</p>
			<p>Movie: {data.movie}</p>
			<p>Date: {data.date}</p>
			<p>Time: {data.time}</p>
			<p>Seat: {data.seat}</p>
		</Modal>
	);
};*/

export default BookingConfirmation;
