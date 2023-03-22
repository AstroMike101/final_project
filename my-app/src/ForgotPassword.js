import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import './index.css';

function ForgotPassword() {
	const onFinish = (e) => {
		console.log(e)
	}
	return (
		<div class="editprofile">
			<div class="section-title">Forgot Password?</div>
			<div class="section-title-but-more-minor">Forgot your password? Enter your email here and we'll reset your password.</div>
			<Form onFinish = {onFinish}>
				<Form.Item
					name="forgotpasswordemail"
					rules={[
						{
							required: true,
							message: 'Invalid email!',
						},
					]}
				>
					<Input placeholder="Email Address" />
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit">Submit</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default ForgotPassword