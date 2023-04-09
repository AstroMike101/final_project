import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import App from '../../App';
import { signInWithEmailAndPassword, signOut, sendEmailVerification } from 'firebase/auth';
import { database } from '../../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { auth } from '../../firebase_setup/firebase';

import { message } from 'antd';


const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                /*var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })*/

                const user = userCredential.user;
                if (user.emailVerified) {
                    navigate("/")
                    //console.log(user);
                    //console.log(props.state)
                    props.changeLoginState(true, user.uid)
                    message.success("Signed in as " + user.email)
                } else {
                    sendEmailVerification(user)
                    signOut(auth).then(() => {
                        message.error("Your email is not verified! Resending verification email.")
                    }).catch((error) => {
                        message.error(error.message)
                    });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //message.error(errorMessage)
                console.log(errorCode, errorMessage);
                message.error("Invalid email or password!");
            });

    }
    return (
        <div className="poo">
            <main >
                <section>
                    <div>

                        <form>
                            <div className="username">
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="password">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>


                            <div>
                                <p class='text'>Dont have an account? Sign up <NavLink to="/register">
                                    Sign up
                                </NavLink></p>
                                <p class='text'><a href='/login/forgotpassword'>Forgot your password?</a></p>
                            </div>
                            <NavLink to="/" ><button type="submit" onClick={onLogin}><a href='#'>Sign in</a></button></NavLink>
                        </form>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login