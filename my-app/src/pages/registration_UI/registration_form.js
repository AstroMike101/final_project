import React, { useState } from 'react';
import './style.css'
function RegistrationForm() {
    return (
        <div className="form">
            <h1 class='text'>Register an Account </h1>
            <div className="form-body">
                <div className="username">
                    <label className="form__label text" for="Name">Name </label>
                    <input class="form__input" type="text" id="Name" placeholder="Name" />
                </div>
               
                <div className="email">
                    <label className="form__label text " for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label text " for="password">Password </label>
                    <input className="form__input" type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <label className="form__label text " for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>

             
                <div className="phoneNumber">
                    <label className="form__label text" for="phoneNumber">Phone Number </label>
                    <input className="form__input" type="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                </div>
                <h1 class='text'>Payment Information</h1>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
    )
}
export default RegistrationForm;