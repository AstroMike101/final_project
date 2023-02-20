import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import './index.css';

function EditProfile(props) {
	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div class="editprofile">
			<div class="section-title">Edit Profile</div>
			<Form
				name="basic"
				labelCol={{
					span: 10,
				}}
				wrapperCol={{
					span: 32,
				}}
				style={{
					maxWidth: 1000,
				}}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
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
						<Input placeholder="Name" />
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
						<Input.Password placeholder="Password" />
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
						<Input placeholder="Phone Number" />
					</Form.Item>
				</div>
			</Form>
		</div>
	)
}

export default EditProfile