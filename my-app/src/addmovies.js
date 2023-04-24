import React, { useState } from 'react';
import { database } from './firebase_setup/firebase.js'
import { ref, push, child, update, set, getDatabase } from "firebase/database";
import { message, Form, Input, Checkbox, Button, Select } from 'antd';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './index.css';
import './pages/registration_UI/style.css'

const { Option } = Select;

function AddMovies() {

	const handleSubmit = (values) => {
		console.log(values)
		const newPostKey = push(child(ref(database), 'posts')).key;
		const db = getDatabase();
		set(ref(db, 'movies/' + newPostKey), {
			movieid: newPostKey,
			movie_name: values.name,
			movie_category: values.category,
			movie_cast: values.cast,
			movie_director: values.director,
			movie_producer: values.producer,
			movie_synopsis: values.synopsis,
			movie_score: values.score,
			movie_rating_code: values.ratingcode,
			movie_trailer: values.trailerlink,
			movie_image: values.image,
			movie_duration: values.duration,
		})
			.then(() => {
				message.success("Added new movie " + values.name)
			})
			.catch((error) => {
				message.error(error.message)
			})
	}
	return (
		<div className="form">
			<NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink>
			<div className="section-title">Add Movies</div>
			<Form
				name="registration"
				style={{
					maxWidth: 700,
				}}
				initialValues={{
					name: '',
					cast: '',
					director: '',
					productor: '',
					synopsis: '',
					score: '',
					trailerlink: '',
					image: '',
				}}
				onFinish={handleSubmit}
				autoComplete="off"
				method='POST'
				scrollToFirstError
			>
				<div className="section-title-minor">Movie Information</div>
				<div>All fields are required.</div>
				<div className="form-row">

					<Form.Item
						name="name"
						rules={[
							{
								required: true,
								message: 'Please input movie name!',
							},
						]}
					>
						<Input placeholder="Name" />
					</Form.Item>

					<Form.Item
						name="category"
						rules={[
							{
								required: true,
								message: 'Please input movie category!'
							},
						]}
					>
						<Select
							placeholder="Category"
							allowClear
						>
							<Option value="Action">Action</Option>
							<Option value="Adventure">Adventure</Option>
							<Option value="Comedy">Comedy</Option>
							<Option value="Drama">Drama</Option>
							<Option value="Horror">Horror</Option>
							<Option value="Nonfiction">Nonfiction</Option>
							<Option value="Romance">Romance</Option>
							<Option value="Other">Other</Option>
						</Select>
					</Form.Item>

					<Form.Item
						name="cast"
						rules={[
							{
								required: true,
								message: 'Please input movie cast!',
							},
						]}
					>
						<Input placeholder="Cast" />
					</Form.Item>

					<Form.Item
						name="director"
						rules={[
							{
								required: true,
								message: 'Please input movie director!',
							},
						]}
					>
						<Input placeholder="Director" />
					</Form.Item>

					<Form.Item
						name="producer"
						rules={[
							{
								required: true,
								message: 'Please input movie producer!',
							},
						]}
					>
						<Input placeholder="Producer" />
					</Form.Item>

					<Form.Item
						name="synopsis"
						rules={[
							{
								required: true,
								message: 'Please input movie synopsis!',
							},
						]}
					>
						<Input placeholder="Synopsis" />
					</Form.Item>

					<Form.Item
						name="score"
						rules={[
							{
								required: true,
								message: 'Please input movie score!',
							},
						]}
					>
						<Input placeholder="Score" />
					</Form.Item>

					<Form.Item
						name="ratingcode"
						rules={[
							{
								required: true,
								message: 'Please input movie rating code!'
							},
						]}
					>
						<Select
							placeholder="Rating Code"
							allowClear
						>
							<Option value="G">G</Option>
							<Option value="PG">PG</Option>
							<Option value="PG-13">PG-13</Option>
							<Option value="R">R</Option>
							<Option value="NC-17">NC-17</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name="trailerlink"
						rules={[
							{
								required: true,
								message: 'Please input a trailer link',
							},
						]}
					>
						<Input placeholder="Trailer (YouTube video ID)" />
					</Form.Item>
					<Form.Item
						name="image"
						rules={[
							{
								required: true,
								message: 'Please input a promotional image',
							},
						]}
					>
						<Input placeholder="Promotional image link" />
					</Form.Item>
					<Form.Item
						name="duration"
						style={{
							maxWidth: 330,
						}}
						rules={[
							{
								required: true,
								message: 'Please input the movie duration',
							},
						]}
					>
						<Input placeholder="Duration (hours)" />
					</Form.Item>
				</div>
				<div className="showtimes">
					<Button type="primary" htmlType="submit">
						Add Movie
					</Button>
				</div>
			</Form>
		</div>
	)
}
export default AddMovies

