import React, { useState, setState } from 'react';
import { database } from '../../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { message, Form } from 'antd';
import './style.css';
function RegistrationForm() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () => {
        // Input verification
        var hasErrors = false;
        if (!firstName) {
            message.error("First name is required")
            hasErrors = true;
        }
        if (!lastName) {
            message.error("Last name is required")
            hasErrors = true;
        }
        if (!email) {
            message.error("Email is required")
            hasErrors = true;
        }
        if (!password) {
            message.error("Password is required")
            hasErrors = true;
        }
        if (password != confirmPassword) {
            message.error("Passwords do not match")
            hasErrors = true;
        }
        if (hasErrors) return;

        let obj = {
            uid: 0,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,

            isAdmin: false,
            isSubscribedToPromotions: false,
        }
        debugger;
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, obj["email"], obj["password"])
            .then((userCredential) => {
                const user = userCredential.user;
                message.success("Registration success!")
                obj["uid"] = user.uid;
                sendEmailVerification(user)
                    .then(() => {
                        message.success("A confirmation email has been sent to your email address.")
                    })
                    .catch((error) => {
                        //message.error("We could not send the verification email - contact an admin")
                        message.error(error.message)
                    });
            })
            .catch((error) => {
                message.error(error.message)
            })
        updates['/users/' + newPostKey] = obj;
        return update(ref(database), updates);
        //console.log(firstName,lastName,email,password,confirmPassword);
    }

    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="" id="lastName" value={lastName} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="Last Name" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => handleInputChange(e)} placeholder="Confirm Password" />
                </div>
            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>

    )
}

export default RegistrationForm