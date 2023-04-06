import React, { Component, useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";



function ForgotPassword() {

	const [email, setEmail] = useState('')
	const auth = getAuth();

	const triggerResetEmail = async () => {
		await sendPasswordResetEmail(auth, email);
		console.log("Password reset email sent")
	}



	

	return (
		<div className="resetPassword-main">


			<div className="resetPassword-main">
				<div className="resetPassword-container">
					<h2>Reset Password </h2>
					<div className="resetPassword-form">
						<form onSubmit={sendPasswordResetEmail}>

							<label>Email</label> <br />
							<input className="resetEmailInput" placeholder="Email" type="email" required /> <br />

	

						</form>
					</div>
				</div>
			</div>




			<button className="resetBtn" type="button" onClick={triggerResetEmail}>Reset password</button>

		</div>
	)
}



export default ForgotPassword;