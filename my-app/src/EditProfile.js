import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select, Checkbox } from 'antd';
import './index.css';

function EditProfile(props) {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

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
			>
				<div class="section-title-minor">Personal Information</div>
				<div class="form-row">
					<Form.Item
						name="name"
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

				<div class="section-title-but-more-minor">Card 2</div>
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
				</div>
				<div class = "form-row">
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</div>
			</Form>
		</div>
	)
}

export default EditProfile

