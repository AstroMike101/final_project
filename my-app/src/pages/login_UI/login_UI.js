import React, { useState } from 'react';
import './login.css';


function login() {
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
                <button type="submit" class="btn"><a href='#'>Sign in</a></button>
            </div>
          
        </div>
    );


}








export default login;