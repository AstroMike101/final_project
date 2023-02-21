import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink } from 'react-router-dom';
import './login.css';
import App from '../../App';


function login(props) {
    return (
        <div className="poo">
            <h1 class='text'>Sign in</h1>

            <div className="form-body">
                <div className="username">
                    <input class="form__input" type="text all" id="username" placeholder="Username" />
                </div>

                <div className="password">
                    <input type="email" id="password" className="form__input all" placeholder="Password" />
                </div>
                <p class='text'>Dont have an account?  Sign up <a href='#'>here</a></p>
              


            </div>
            <div class="footer">
                <NavLink to = "/" style = {{textDecoration: 'none'}}><button type="submit" class="btn" onClick = {props.handleLoginClick}><a href='#'>Sign in</a></button></NavLink>
            </div>
          
        </div>
    );


}








export default login;