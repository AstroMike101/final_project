import React from 'react';
import{ BrowserRouter as Router, Route, Switch, Link, useParams, NavLink } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import './index.css';

function BookingConfirmation(props) {
	return (
		<div class="booking-display">
			<div class="section-title">Thank you for your purchase!</div>
			<div class="section-title-minor text-bg">Order Summary</div>
			<div>Order ID: 6942069</div>
			<div>"The Flash", 2/20/2023, 8:00 PM</div>
			<div>Seats A1, A2, A3</div>
			<div>4x Teenager Ticket: $60</div>
			<div>Sales Tax: $5</div>
			<div class="section-title-but-even-more-minor text-bg">Total: $65</div>

			<div class="section-title-minor">A receipt has been sent to your email address.</div>

			<NavLink to="/" style={{ textDecoration: 'none' }}>
				<Button type="primary">
					Return home
				</Button>
			</NavLink>
		</div>
	)
}

export default BookingConfirmation;