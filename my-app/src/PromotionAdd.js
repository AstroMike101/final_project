import './index.css';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import adminPortal from './pages/adminPortal/adminPortal'
import { database } from './firebase_setup/firebase.js'



// import './index.css';



const sendMailFunc = firebase.functions().httpsCallable('sendMail')
// If there are multiple arguments when executing Functions, pass them as objects.
sendMailFunc({
    targetAdress: '[astromike101@gmail.com]',
})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

console.log("Email Sent!");

function PromotionAdd() {
    const [promotionName, setPromotionName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [promotionEffect, setPromotionEffect] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Promotion Name: ${promotionName}`);
        console.log(`Expiration Date: ${expirationDate}`);
        console.log(`Promotion Effect: ${promotionEffect}`);
    };

    return (
        <div className="add-promotions-container1">
            <NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink>

            <h1 className="add-promotions-header1">Add Promotions</h1>
            <form className="add-promotions-form1" onSubmit={handleSubmit}>
                <label className="add-promotions-label1">
                    Promotion name:
                    <input
                        className="add-promotions-input1"
                        type="text"
                        value={promotionName}
                        onChange={(event) => setPromotionName(event.target.value)}
                    />
                </label>
                <br />
                <label className="add-promotions-label1">
                    Promotion expiration date:
                    <input
                        className="add-promotions-input1"
                        type="text"
                        value={expirationDate}
                        onChange={(event) => setExpirationDate(event.target.value)}
                    />
                </label>
                <br />
                <label className="add-promotions-label1">
                    Promotion effect:
                    <input
                        className="add-promotions-input1"
                        type="text"
                        value={promotionEffect}
                        onChange={(event) => setPromotionEffect(event.target.value)}
                    />
                </label>
                <br />
                <button onClick={sendMailFunc} className="add-promotions-button1" type="submit">Submit</button>
                {/* <button className="add-promotions-button1" type="submit">Return to Admin Panel</button> */}
                {/* <NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink> */}
            </form>
        </div>
    );
}

export default PromotionAdd;
