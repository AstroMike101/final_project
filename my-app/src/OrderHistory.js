import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Card, Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col, Radio, Divider, message } from 'antd';
import { FieldTimeOutlined, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Component, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { ref, push, child, update, getDatabase, onValue, get, set } from "firebase/database";
import { ref as sRef } from 'firebase/storage';
import { database } from './firebase_setup/firebase.js'
import './index.css';

const OrderHistory = (props) => {
	return (
		<div>
			<div className="showtimes">
				<div className="section-title">Order History</div>
				{props.orders.filter((order) => {
					if (order.userid == props.curUser) return order;
				})
				.map((order) => {
					return (
						<div className="form">
							<div className="section-title-minor">{order.moviename}</div>
							<div>Showtime: {order.showtimestr}</div>
							<div>Tickets: {order.tickets.toString()}</div>
							<div>Seats: {order.seats.toString()}</div>
							<div>Price: ${order.pricetotal}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default OrderHistory;