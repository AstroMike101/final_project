import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox } from 'antd';
import './../../index.css';
import swal from 'sweetalert';
import bcrypt from 'bcryptjs'
import { database } from '../../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";

function addmovies(props) 
{
	const salt = bcrypt.genSaltSync(10);
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const [addmovie,setaddmovies]=useState({
		movie_name:"",
		movie_category:"",
		movie_cast:"",
		movie_director:"",
		movie_producer:"",
		movie_synopsis:"",
		movie_score:"",
		movie_rating_code:"",
		movie_dates:"",
		movie_times:"",
        trailer_video:"",
        movie_poster:""
	});

	let name , value;
	const getaddmoviesData=(event)=>{
		// event.persist();
		console.log("We are here to solve");
		console.log(event.target);
         name=event.target.id;
		 console.log(event.target.getAttribute('id'));
	     value=event.target.value;
		 if(name=="basic_password"){
			value=bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		 }
		 console.log(event.target.getAttribute('value'));

		 setaddmovies({...setaddmovies, [name]: value});
	}

	const postAddMovies= async(e)=>{
        e.preventDefault();

		const {
			movie_name,
			movie_category,
			movie_cast,
			movie_director,
			movie_producer,
			movie_synopsis,
			movie_score,
			movie_rating_code,
			movie_dates,
			movie_times,
        	trailer_video,
        	movie_poster}=addmovie;

		const res=await fetch("https://cs4050-final-default-rtdb.firebaseio.com/movies.json",
		{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(
				{
					movie_name,
		            movie_category,
		            movie_cast,
		            movie_director,
		            movie_producer,
		            movie_synopsis,
		            movie_score,
		            movie_rating_code,
	    	        movie_dates,
		            movie_times,
                    trailer_video,
                    movie_poster
				}
			)
		}
		);

		console.log(res);
	if(res){

		swal("Saved!", "You successfully added the movie", "success");
	}

	}

	return (
		<div class="addmovie">
			<div class="section-title">Add Movies</div>
			<Form
				name=""
				labelCol={{
					span: 10,
				}}
				wrapperCol={{
					span: 32,
				}}
				style={{
					maxWidth: 1500,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				method='POST'
			/>
				<div className="section-title-minor">Movie Information</div>
				<div className="form-row">

					<Form.Item
						name="name"
						value={addmovie.movie_name}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie name!',
							},
						]}
					>
						<Input placeholder="Name*" />
					</Form.Item>

                    <Form.Item
						category="category"
						value={addmovie.movie_category}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie category!',
							},
						]}
					>
						<Input placeholder="Category*" />
					</Form.Item>

					<Form.Item
						cast="cast"
						value={addmovie.movie_cast}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie cast!',
							},
						]}
					>
						<Input placeholder="Cast*" />
					</Form.Item>

					<Form.Item
						director="director"
						value={addmovie.movie_director}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie director!',
							},
						]}
					>
						<Input placeholder="Director*" />
					</Form.Item>

					<Form.Item
						producer="producer"
						value={addmovie.movie_producer}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie producer!',
							},
						]}
					>
						<Input placeholder="Producer*" />
					</Form.Item>

					<Form.Item
						synopsis="synopsis"
						value={addmovie.movie_synopsis}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie synopsis!',
							},
						]}
					>
						<Input placeholder="Synopsis*" />
					</Form.Item>

					<Form.Item
						score="score"
						value={addmovie.movie_score}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie score!',
							},
						]}
					>
						<Input placeholder="Score*" />
					</Form.Item>

					<Form.Item
						rating_code="rating code"
						value={addmovie.movie_rating_code}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie rating code!',
							},
						]}
					>
						<Input placeholder="Rating_code*" />
					</Form.Item>

					<Form.Item
						dates="dates"
						value={addmovie.movie_dates}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie dates!',
							},
						]}
					>
						<Input placeholder="Dates*" />
					</Form.Item>

					<Form.Item
						times="times"
						value={addmovie.movie_times}
						onChange={getaddmoviesData}
						rules={[
							{
								required: true,
								message: 'Please input movie times!',
							},
						]}
					>
						<Input placeholder="Times*" />
					</Form.Item>
				</div>
				<div class = "addmovie">
					<Button type="primary" htmlType="submit" onClick={postAddMovies}>
						Submit
					</Button>
				</div>
		</div>
	)
}

export default addmovies;
		
                    