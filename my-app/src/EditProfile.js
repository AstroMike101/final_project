import React, { useState, useEffect, useRef, forceUpdate } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox, useForm, message } from 'antd';
import { database } from './firebase_setup/firebase.js'
import { ref, push, child, update, getDatabase, onValue, get } from "firebase/database";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import './index.css';
import swal from 'sweetalert';
import bcrypt from 'bcryptjs'

const auth = getAuth();
const user = auth.currentUser;

function EditProfile(props) {
	const [form] = Form.useForm()
	const [editProfile, setEditProfile] = useState({
		uid: '',
		name: '',
		phone: '',
		email: '',
		//password: values.password,

		billingaddress: '',
		billingcitystate: '',
		billingzip: '',

		ccn1: '',
		ccn1type: '',
		ccn1expdate: '',
		ccn1address: '',
		ccn1citystate: '',
		ccn1zip: '',

		isAdmin: false,
		isSubscribedToPromotions: false,
	})

	//const userRef = ref(database, 'users');
	useEffect(() => {
		//console.log("FUCK!!!")
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;

				const dbRef = ref(getDatabase());
				get(child(dbRef, `users/${uid}`)).then((snapshot) => {
					if (snapshot.exists()) {
						setEditProfile({
							uid: uid,
							name: snapshot.val().name,
							phone: snapshot.val().phone,
							email: snapshot.val().email,
							//password: values.password,

							billingaddress: snapshot.val().billingaddress,
							billingcitystate: snapshot.val().billingcitystate,
							billingzip: snapshot.val().billingzip,

							ccn1: snapshot.val().ccn1,
							ccn1type: snapshot.val().ccn1type,
							ccn1expdate: snapshot.val().ccn1expdate,
							ccn1address: snapshot.val().ccn1address,
							ccn1citystate: snapshot.val().ccn1citystate,
							ccn1zip: snapshot.val().ccn1zip,

							isAdmin: snapshot.val().isAdmin,
							isSubscribedToPromotions: snapshot.val().isSubscribedToPromotions,
						})
						form.setFieldsValue({
							name: snapshot.val().name,
							phone: snapshot.val().phone,
							email: snapshot.val().email,

							billingaddress: snapshot.val().billingaddress,
							billingcitystate: snapshot.val().billingcitystate,
							billingzip: snapshot.val().billingzip,

							ccn1: snapshot.val().ccn1,
							ccn1type: snapshot.val().ccn1type,
							ccn1expdate: snapshot.val().ccn1expdate,
							ccn1address: snapshot.val().ccn1address,
							ccn1citystate: snapshot.val().ccn1citystate,
							ccn1zip: snapshot.val().ccn1zip,

							subpromo: snapshot.val().isSubscribedToPromotions,
						})
					}
				}).catch((error) => {
					console.error(error);
				});
			}
		});
	}, [])


	const salt = bcrypt.genSaltSync(10);
	const onFinish = (values) => {

		let obj = values;
		obj.uid = editProfile.uid
		obj.isAdmin = editProfile.isAdmin
		obj.email = editProfile.email
		obj.isSubscribedToPromotions = values.subpromo

		const newPassword = obj.password;

		delete obj.password
		delete obj.subpromo

		onAuthStateChanged(auth, (user) => {
			if (user) {
				updatePassword(user, newPassword).then(() => {
					console.log("password updated")
				}).catch((error) => {
					message.error(error.message)
				});
			}
		})
		const updates = {};
		updates['/users/' + obj.uid] = obj;
		message.success("Profile successfully updated!")
		return update(ref(database), updates)
	};

	const onFinishFailed = (errorInfo) => {
		message.error(errorInfo);
	};

	let name, value;
	const getEditProfileData = (event) => {
		// event.persist();
		//console.log("We are here to solve");
		//console.log(event.target);
		name = event.target.id;
		//console.log(event.target.getAttribute('id'));
		value = event.target.value;
		if (name == "basic_password") {
			value = bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		}
		if (name == "basic_cc1") {
			value = bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		}
		if (name == "basic_expiration1") {
			value = bcrypt.hashSync(value, '$2a$10$CwTycUXWue0Thq9StjUM0u');
		}
		//console.log(event.target.getAttribute('value'));

		//setEditProfile({ ...editProfile, [name]: value });
	}

	/*const postEditProfile = async (e) => {
		console.log(props.state)
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
		} = editProfile;

		const res = await fetch("https://cs4050-final-default-rtdb.firebaseio.com/users.json",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(
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
		if (res) {

			swal("Saved!", "You successfully Upadated your profile", "success");
		}

	}*/

	/* jesus fucking christ */
	return (
		<div class="editprofile">
			<div class="section-title">Edit Profile</div>
			<div>Fields marked with an * are required.</div>
			<Form
				form={form}
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
					name: editProfile.name,
					phone: editProfile.phone,
					email: editProfile.email,

					billingaddress: editProfile.billingaddress,
					billingcitystate: editProfile.billingcitystate,
					billingzip: editProfile.billingzip,

					ccn1: editProfile.ccn1,
					ccn1type: editProfile.ccn1type,
					ccn1expdate: editProfile.ccn1expdate,
					ccn1address: editProfile.ccn1address,
					ccn1citystate: editProfile.ccn1citystate,
					ccn1zip: editProfile.ccn1zip,

					subpromo: editProfile.isSubscribedToPromotions,
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
						defaultValue={editProfile.name}
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
						value={''}
					>
						<Input.Password placeholder="Change Password" />
					</Form.Item>

					<Form.Item
						name="phone"
						defaultValue={editProfile.phone}
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
						name="billingaddress"
						value={editProfile.billingaddress}
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
						name="billingcitystate"
						value={editProfile.billingcitystate}
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
						name="billingzip"
						value={editProfile.billingzip}
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
						value={editProfile.ccn1}
					>
						<Input placeholder="CC Number" />
					</Form.Item>

					<Form.Item
						name="ccn1type"
						value={editProfile.ccn1type}
					>
						<Input placeholder="Card Type" />
					</Form.Item>
					<Form.Item
						name="ccn1expdate"
						value={editProfile.ccn1expdate}
					>
						<Input placeholder="Expiration Date" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="ccn1address"
						value={editProfile.ccn1address}
					>
						<Input placeholder="Address" />
					</Form.Item>

					<Form.Item
						name="ccn1citystate"
						value={editProfile.ccn1citystate}
					>
						<Input placeholder="City/State" />
					</Form.Item>
					<Form.Item
						name="ccn1zip"
						value={editProfile.ccn1zip}
					>
						<Input placeholder="Zip Code" />
					</Form.Item>
				</div>
				<div class="form-row">
					<Form.Item
						name="subpromo"
						valuePropName="checked"
					>
						<Checkbox>
							Subscribe to promotions
						</Checkbox>
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
				</div>*/}
				<div class="form-row">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default EditProfile

