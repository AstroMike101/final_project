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
		console.log(email);
		await sendPasswordResetEmail(auth, email);
		console.log("Password reset email sent"); 
	}



	

	return (
		<div className="resetPassword-main">


			<div className="resetPassword-main">
				<div className="resetPassword-container">
					<h2 className= "text">Reset Password </h2>
					<div className="resetPassword-form">
						<form onSubmit={sendPasswordResetEmail}>

						
							<input className="resetEmailInput" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required /> 
	

						</form>
					</div>
				</div>
			</div>

			




			<Button  class = "resetBtn" type="primary" onClick={triggerResetEmail}>Reset password</Button>

		</div>
	)
}



export default ForgotPassword;