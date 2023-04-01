import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import App from '../../App';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { database } from '../../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { auth } from '../../firebase_setup/firebase';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            var lgDate = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: lgDate,
            })
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert("Invalid Credentials. Try again.");
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
                                    onChange={(e)=>setEmail(e.target.value)}
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
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>


                            <div>
                    <p class='text'>Dont have an account? Sign up <NavLink to="/register">
                                Sign up
                            </NavLink></p>
                    <p class='text'><a href='/login/forgotpassword'>Forgot your password?</a></p>                   
                </div>                 
                <NavLink to = "/" ><button type="submit" onClick = {onLogin}><a href='#'>Sign in</a></button></NavLink>                                                         
                        </form>               
                                                   
                    </div>
                </section>
            </main>
            </div>
    )
}
 
export default Login