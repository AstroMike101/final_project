import './index.css';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import adminPortal from './pages/adminPortal/adminPortal'
import { database } from './firebase_setup/firebase.js'
import { ref, push, child, update, set, getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { message } from 'antd';
import emailjs from 'emailjs-com';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



import 'firebase/functions';
//import firebase from 'firebase/app';



// import './index.css';



// const sendMailFunc = firebase.functions().httpsCallable('sendMail')
// // If there are multiple arguments when executing Functions, pass them as objects.
// sendMailFunc({
//     targetAdress: '[astromike101@gmail.com]',
// })
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => {
//         console.log(err)
//     })

/*firebase.initializeApp({
    apiKey: "[apikey]",
    authDomain: "cs4050-final.firebaseapp.com",
    databaseURL: "https://cs4050-final-default-rtdb.firebaseio.com",
    projectId: "cs4050-final",
    storageBucket: "cs4050-final.appspot.com",
    messagingSenderId: "162578543244",
    appId: "1:162578543244:web:a5d0cb96ce42aee23481a9",
    measurementId: "G-7EBQ16Y8PJ"
});

const sendPromoEmail = firebase.functions().httpsCallable('sendPromotionalEmail');
*/

var templateParams = {
    expirationDate: expirationDate,
    promoCode: this.promotionName,
    promoDiscount: this.promotionEffect,
};
    function sendPromoEmail(e) {
        if (templateParams) {		
        emailjs.send(
        "service_7meiuxn", 
        "template_1tifhnk",
        templateParams,
        "IZH6BCzIJ64l2t4mj"
        ).then(res=>{
            console.log(res);
        }) .catch(err=>console.log(err)); 
    } else {
        console.error('Template params are not defined');
    }
} // sendPromoEmail



function PromotionAdd() {
    const [promotionName, setPromotionName] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [promotionEffect, setPromotionEffect] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Promotion Name: ${promotionName}`);
        console.log(`Expiration Date: ${expirationDate}`);
        console.log(`Promotion Effect: ${promotionEffect}`);
        const newPostKey = push(child(ref(database), 'posts')).key;
		const db = getDatabase();
		set(ref(db, 'promotions/' + newPostKey), {
			promocode: promotionName,
            expdate: expirationDate,
            promoeffect: promotionEffect
		})
			.then(() => {
				message.success("Added new promotional code " + promotionName)
			})
			.catch((error) => {
				message.error(error.message)
			})
    };

    // This needs to be changed to an antd form later -Andrew
    return (
        <div className="add-promotions-container1">
            <NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink>

            <h1 className="add-promotions-header1">Add Promotions</h1>
            <form className="add-promotions-form1" onSubmit={handleSubmit}>
                <label className="add-promotions-label1">
                    Promotional code:
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
                    Discount percentage:
                    <input
                        className="add-promotions-input1"
                        type="text"
                        value={promotionEffect}
                        onChange={(event) => setPromotionEffect(event.target.value)}
                    />
                </label>
                <br />
                <button onclick={sendPromoEmail} sendclassName="add-promotions-button1" type="submit">Submit</button>
                {/* <button className="add-promotions-button1" type="submit">Return to Admin Panel</button> */}
                {/* <NavLink to="/admin"><button className="add-promotions-button1" type="submit">Return to Admin Panel</button></NavLink> */}
            </form>
        </div>
    );
}

export default PromotionAdd;
