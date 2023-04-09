import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox } from 'antd';
import './index.css';
import swal from 'sweetalert';
import bcrypt from 'bcryptjs'


function EditProfile(props) {
	const salt = bcrypt.genSaltSync(10);
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	
	const [editProfile,setEditProfile]=useState({
		basic_name:"",
		basic_password:"",
		basic_phone:"",
		basic_addressbilling:"",
		basic_citystatebilling:"",
		basic_zipcodebilling:"",
		basic_ccn1:"",
		basic_cardtype1:"",
		basic_expiration1:"",
		basic_address1:"",
		basic_citystate1:"",
		basic_zipcode1:""
	});

   let name , value;
	const getEditProfileData=(event)=>{
		// event.persist();
		console.log("We are here to solve");
		console.log(event.target);
         name=event.target.id;
		 console.log(event.target.getAttribute('id'));
	     value=event.target.value;
		 if(name=="basic_password"){
			value=bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		 }
		 if(name=="basic_cc1"){
			value=bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		 }
		 if(name=="basic_expiration1"){
			value=bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		 }
		 console.log(event.target.getAttribute('value'));

	   setEditProfile({...editProfile, [name]: value});
	}

	const postEditProfile= async(e)=>{
        e.preventDefault();
		

		const {
			basic_name,
			basic_password,
			basic_phone,
			basic_addressbilling,
			basic_citystatebilling,
			basic_zipcodebilling,
			basic_ccn1,
			basic_cardtype1,
			basic_expiration1,
			basic_address1,
			basic_citystate1,
			basic_zipcode1
	                      }=editProfile;

		const res=await fetch("https://cs4050-final-default-rtdb.firebaseio.com/users.json",
		{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(
				{
					basic_name,
					basic_password,
					basic_phone,
					basic_addressbilling,
					basic_citystatebilling,
					basic_zipcodebilling,
					basic_ccn1,
					basic_cardtype1,
					basic_expiration1,
					basic_address1,
					basic_citystate1,
					basic_zipcode1
				}
			)
		}
		);

		console.log(res);
	if(res){

		swal("Saved!", "You successfully Upadated your profile", "success");
	}

	}

	/* jesus fucking christ */
	return (
		<div class="editprofile">
			<div class="section-title">Edit Profile</div>
			<div>Fields marked with an * are required.</div>
			<Form
				name="basic"
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
			>
				<div className="section-title-minor">Personal Information</div>
				<div className="form-row">
					<Form.Item
						name="name"
						value={editProfile.basic_name}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
					>
						<Input placeholder="Name*" />
					</Form.Item>
 
					<Form.Item
						name="password"
						value={editProfile.basic_password}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password placeholder="Password*" />
					</Form.Item>

					<Form.Item
						name="phone"
						value={editProfile.basic_phone}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Please input your phone number!',
							},
						]}
					>
						<Input placeholder="Phone Number*" />
					</Form.Item>
				</div>

				<div class="section-title-minor">Billing Information</div>
				<div class="form-row">
					<Form.Item
						name="addressbilling"
						value={editProfile.basic_addressbilling}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid address!',
							},
						]}
					>
						<Input placeholder="Address*" />
					</Form.Item>

					<Form.Item
						name="citystatebilling"
						value={editProfile.basic_citystatebilling}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid city/state!',
							},
						]}
					>
						<Input placeholder="City/State*" />
					</Form.Item>
					<Form.Item
						name="zipcodebilling"
						value={editProfile.basic_zipcodebilling}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid zip code!',
							},
						]}
					>
						<Input placeholder="Zip Code*" />
					</Form.Item>
				</div>

				<div class="section-title-minor">Payment Information</div>
				<div class="section-title-but-more-minor">Card 1</div>
				<div class="form-row">
					<Form.Item
						name="ccn1"
						value={editProfile.basic_ccn1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid card number!',
							},
						]}
					>
						<Input placeholder="CC Number*" />
					</Form.Item>

					<Form.Item
						name="cardtype1"
						value={editProfile.basic_cardtype1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid card type!',
							},
						]}
					>
						<Input placeholder="Card Type*" />
					</Form.Item>
					<Form.Item
						name="expiration1"
						value={editProfile.basic_expiration1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid expiration date!',
							},
						]}
					>
						<Input placeholder="Expiration Date*" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="address1"
						value={editProfile.basic_address1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid address!',
							},
						]}
					>
						<Input placeholder="Address*" />
					</Form.Item>

					<Form.Item
						name="citystate1"
						value={editProfile.basic_citystate1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid city/state!',
							},
						]}
					>
						<Input placeholder="City/State*" />
					</Form.Item>
					<Form.Item
						name="zipcode1"
						value={editProfile.basic_zipcode1}
						onChange={getEditProfileData}
						rules={[
							{
								required: true,
								message: 'Invalid zip code!',
							},
						]}
					>
						<Input placeholder="Zip Code*" />
					</Form.Item>
				</div>

				{/* <div class="section-title-but-more-minor">Card 2</div>
				<div class="form-row">
					<Form.Item
						name="ccn2"
						rules={[
							{
								required: true,
								message: 'Invalid card number!',
							},
						]}
					>
						<Input placeholder="CC Number" />
					</Form.Item>

					<Form.Item
						name="cardtype2"
						rules={[
							{
								required: true,
								message: 'Invalid card type!',
							},
						]}
					>
						<Input placeholder="Card Type" />
					</Form.Item>
					<Form.Item
						name="expiration2"
						rules={[
							{
								required: true,
								message: 'Invalid expiration date!',
							},
						]}
					>
						<Input placeholder="Expiration Date" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="address2"
						rules={[
							{
								required: true,
								message: 'Invalid address!',
							},
						]}
					>
						<Input placeholder="Address" />
					</Form.Item>

					<Form.Item
						name="citystate2"
						rules={[
							{
								required: true,
								message: 'Invalid city/state!',
							},
						]}
					>
						<Input placeholder="City/State" />
					</Form.Item>
					<Form.Item
						name="zipcode2"
						rules={[
							{
								required: true,
								message: 'Invalid zip code!',
							},
						]}
					>
						<Input placeholder="Zip Code" />
					</Form.Item>
				</div>

				<div class="section-title-but-more-minor">Card 3</div>
				<div class="form-row">
					<Form.Item
						name="ccn3"
						rules={[
							{
								required: true,
								message: 'Invalid card number!',
							},
						]}
					>
						<Input placeholder="CC Number" />
					</Form.Item>

					<Form.Item
						name="cardtype3"
						rules={[
							{
								required: true,
								message: 'Invalid card type!',
							},
						]}
					>
						<Input placeholder="Card Type" />
					</Form.Item>
					<Form.Item
						name="expiration3"
						rules={[
							{
								required: true,
								message: 'Invalid expiration date!',
							},
						]}
					>
						<Input placeholder="Expiration Date" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="address3"
						rules={[
							{
								required: true,
								message: 'Invalid address!',
							},
						]}
					>
						<Input placeholder="Address" />
					</Form.Item>

					<Form.Item
						name="citystate3"
						rules={[
							{
								required: true,
								message: 'Invalid city/state!',
							},
						]}
					>
						<Input placeholder="City/State" />
					</Form.Item>
					<Form.Item
						name="zipcode3"
						rules={[
							{
								required: true,
								message: 'Invalid zip code!',
							},
						]}
					>
						<Input placeholder="Zip Code" />
					</Form.Item>
				</div>

				<div class="section-title-but-more-minor">Card 4</div>
				<div class="form-row">
					<Form.Item
						name="ccn4"
						rules={[
							{
								required: true,
								message: 'Invalid card number!',
							},
						]}
					>
						<Input placeholder="CC Number" />
					</Form.Item>

					<Form.Item
						name="cardtype4"
						rules={[
							{
								required: true,
								message: 'Invalid card type!',
							},
						]}
					>
						<Input placeholder="Card Type" />
					</Form.Item>
					<Form.Item
						name="expiration4"
						rules={[
							{
								required: true,
								message: 'Invalid expiration date!',
							},
						]}
					>
						<Input placeholder="Expiration Date" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="address4"
						rules={[
							{
								required: true,
								message: 'Invalid address!',
							},
						]}
					>
						<Input placeholder="Address" />
					</Form.Item>

					<Form.Item
						name="citystate4"
						rules={[
							{
								required: true,
								message: 'Invalid city/state!',
							},
						]}
					>
						<Input placeholder="City/State" />
					</Form.Item>
					<Form.Item
						name="zipcode4"
						rules={[
							{
								required: true,
								message: 'Invalid zip code!',
							},
						]}
					>
						<Input placeholder="Zip Code" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item name="subscribepromo" valuePropName="checked">
						<Checkbox>Subscribe to promotions</Checkbox>
					</Form.Item>
				</div> */}
				<div class = "form-row">
					<Button type="primary" htmlType="submit" onClick={postEditProfile}>
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default EditProfile

