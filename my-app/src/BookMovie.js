import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink } from 'react-router-dom';
import { Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col, Radio, Divider } from 'antd';
import { FieldTimeOutlined, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Component, useState, useEffect } from "react";

import './index.css';
import BookingConfirmation from "./BookingConfirmation.js";

const { Option } = Select;

//import flashimg from "./images/flash.jpg"
const onFinish = (values) => {
	console.log('Received values of form:', values);
};

function BookMovie(props) {
	const params = useParams();

	const [value, setValue] = useState(1);
	const [showState, setShowState] = useState(['dingus']);
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const showtimes = props.state.showtimes.filter((showtimes) => { if (showtimes.movieid == params.id) return showtimes; })
	var showtimesFormatted = []
	/*showtimes.map((showtimes) => {
		showtimesFormatted = [...showtimesFormatted, showtimes.showtimeMonth + '/' + showtimes.showtimeDay + '/' + showtimes.showtimeYear + ', ' + showtimes.showtimeHour + ':' + showtimes.showtimeMinute]
	})*/
	//setShowState(showtimesFormatted)
	//console.log(showtimesFormatted)

function returnOrderSummary() { 
	let numberoftickets = document.querySelectorAll('.ant-select-selector');
	console.log(numberoftickets);
	let orderTotal = 0;

	for (let i=0; i>=numberoftickets; i++ ) { 
		orderTotal+=15; 
	}
	return orderTotal;
}

	


function returnTicketStats() { 
	let orderSummary = document.querySelector('.section-title-minor');
	let ageForm = document.querySelectorAll('.ant-select-selection-item')
	return ageForm;

}










	return (
		<div>
			{props.state.movies.map((movie) => {
				if (movie.movieid == params.id) {
					return (
						<div class="booking-display">
							<div class="section-title">Movie details</div>
							<div class="spacing"></div>
							<div class="booking-container">
								<div class="booking-form">
									<div class="movie-title">{movie.movie_name}</div>
									<div class="movie-details">{"Rated " + movie.movie_rating_code}</div>
									<div class="movie-details">{movie.movie_category}</div>
									<div class="movie-details">{"Review score: " + movie.movie_score}</div>
									<img src={movie.movie_image} class="movie-banner" />
									<div class="movie-synopsis">{movie.movie_synopsis}</div>
									<div>
										<iframe width="374" height="210" src={"https://www.youtube.com/embed/" + movie.movie_trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
									</div>
									<div class="movie-details-addl">{"Director: " + movie.movie_director}</div>
									<div class="movie-details-addl">{"Producer: " + movie.movie_producer}</div>
									<div class="movie-details-addl">{"Cast: " + movie.movie_cast}</div>
								</div>
								<div class="booking-form">
									<div class="section-title-minor">Choose showtime</div>
									<div class="booking-inner-row">
										<Select
											placeholder="Choose a showtime..."
											style={{
												width: 250,
											}}
										>
											{showtimes.map((showtimes, index) => {
												return <Option value={index}>{showtimes.showtimeMonth + '/' + showtimes.showtimeDay + '/' + showtimes.showtimeYear + ', ' + showtimes.showtimeHour + ':' + showtimes.showtimeMinute}</Option>
											})}
										</Select>
									</div>

									<div class="section-title-minor">Add tickets</div>

									<Form
										name="dynamic_form_nest_item"
										onFinish={onFinish}
										style={{
											maxWidth: 600,
										}}
										autoComplete="off"
									>
										<div class="booking-addtickets">
											<Form.List name="users">
												{(fields, { add, remove }) => (
													<>
														{fields.map(({ key, name, ...restField }) => (
															<Space
																key={key}
																style={{
																	display: 'flex',
																	marginBottom: 5,
																}}
																align="baseline"
															>
																<div>Price: $15</div>
																<Select
																	defaultValue={'Select age category'}
																	style={{
																		width: 200,
																	}}
																	options={[
																		{
																			value: 'Child',
																			label: 'Child (0-11)',
																		},
																		{
																			value: 'Teen',
																			label: 'Teen (12-17)',
																		},
																		{
																			value: 'Adult',
																			label: 'Adult (18+)',
																		},
																	]}
																/>
																<MinusCircleOutlined onClick={() => remove(name)} />
															</Space>
														))}
														<div class="booking-display">
															<Form.Item>
																<Button type="dashed" onClick={() => add()} icon={<PlusOutlined />}>
																	Add a ticket
																</Button>
															</Form.Item>
														</div>
													</>
												)}
											</Form.List>
										</div>
										<div class="booking-display">
											<div class="section-title-minor">Select seats</div>
											<Checkbox.Group
												style={{
													width: '80%',
												}}
											>
												<Row gutter={[2, 2]} flex="auto">
													<Col span={4}>
														<Checkbox value="A1">A1</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="A2">A2</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="A3">A3</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="A4">A4</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="A5">A5</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="A6">A6</Checkbox>
													</Col>

													<Col span={4}>
														<Checkbox value="B1">B1</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="B2">B2</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="B3">B3</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="B4">B4</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="B5">B5</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="B6">B6</Checkbox>
													</Col>

													<Col span={4}>
														<Checkbox value="C1">C1</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="C2">C2</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="C3">C3</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="C4">C4</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="C5">C5</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="C6">C6</Checkbox>
													</Col>

													<Col span={4}>
														<Checkbox value="D1">D1</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="D2">D2</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="D3">D3</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="D4">D4</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="D5">D5</Checkbox>
													</Col>
													<Col span={4}>
														<Checkbox value="D6">D6</Checkbox>
													</Col>
												</Row>

											</Checkbox.Group>
										</div>

										<div class="booking-display-smallgap">
											<div class="section-title-minor">Order summary</div>
											

										


											<div>4x Teenager Ticket: $60</div>
											<div>Sales Tax: $5</div>
											<div class="section-title-but-even-more-minor">Total: $65</div>
										</div>

										<div class="booking-display">
											<div class="section-title-minor">Pay with saved card</div>
											<Radio.Group value={value} onChange={onChange}>
												<Space direction="vertical">
													<Radio value={1}>Card 1</Radio>
													<Radio value={2}>Card 2</Radio>
													<Radio value={3}>Card 3</Radio>
													<Radio value={4}>Card 4</Radio>
												</Space>
											</Radio.Group>
										</div>
										<Divider orientation="left"></Divider>
										<div class="booking-display-smallgap">
											<Form.Item>
												<NavLink to="/CheckOutPage" style={{ textDecoration: 'none' }}>
										
													<Button type="primary" htmlType="submit">
														Book tickets
													</Button>
												</NavLink>
											</Form.Item>
											<NavLink to="/" style={{ textDecoration: 'none' }}>
												<Button type="dashed" danger>
													Cancel
												</Button>
											</NavLink>
										</div>
									</Form>


								</div>
							</div>
						</div>
					);
				}
			})}

		</div>
	)
}







export default BookMovie;