import React, { useState } from 'react';
import './style.css'
function RegistrationForm() {
    return (
        <div className="form">
            <h1 class='text'>Register an Account </h1>

            <div className="form-body">
                <div className="username">
                    <input class="form__input" type="text all" id="Name" placeholder="Name" />
                </div>
               
                <div className="email">
                    <input type="email" id="email" className="form__input all" placeholder="Email" />
                </div>
                <div className="password">
                   
                    <input className="form__input all" type="password" id="password" placeholder="Password" />
                </div>
                <div className="confirm-password">
                    <input className="form__input all" type="password" id="confirmPassword" placeholder="Confirm Password" />
                </div>

             
                <div className="phoneNumber">
                    <input className="form__input all" type="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                </div>
                <h1 class='text'>Payment Information</h1>
           

                    <div className="cardType">
                        <input className="form__input all" type="cardType" id="cardType" placeholder="Card Type" />
                    </div>

                    <div className="cardNumber">
                        <input className="form__input all" type="cardNumber" id="cardNumber" placeholder="Card #" />
                    </div>


                    <div className="experationDate">
                        <input className="form__input all" type="experationDate" id="experationDate" placeholder="Expiration Date" />
                    </div>


            
                <h1 class='text'>Billing Information</h1>

                <div className="username">
                    <input class="form__input" type="text all" id="Name" placeholder="Name" />
                </div>

                <div className="address">
                    <input className="form__input all" type="address" id="address" placeholder="Address" />
                </div>


                <div className="zipCode">
                    <input className="form__input all" type="zipCode" id="zipCode" placeholder="Zip Code" />
                </div>







            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>
    )
}
export default RegistrationForm;