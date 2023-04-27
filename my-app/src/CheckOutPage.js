import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { Card, Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col, Radio, Divider, message } from 'antd';
import { FieldTimeOutlined, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Component, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updatePassword } from "firebase/auth";
import { ref, push, child, update, getDatabase, onValue, get, set } from "firebase/database";
import { database } from './firebase_setup/firebase.js'
import CryptoJS from 'crypto-js';

import './index.css';
import BookMovie from './BookMovie.js'
import BookingConfirmation from './BookingConfirmation';




const auth = getAuth();

const CheckoutPage = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const [checkoutForm] = Form.useForm()
    const [selectedCard, setSelectedCard] = useState("card1");
    const [cardInfo, setCardInfo] = useState({
        userid: '',
        ccn1: '',
        ccn1type: '',
        ccn1expdate: '',
        ccn1address: '',
        ccn1citystate: '',
        ccn1zip: '',
    })
    const [disabled, setDisabled] = useState(true) // used to disable selecting current card if it doesn't exist
    const [movieName, setMovieName] = useState("")
    const [showtimeStr, setShowtimeStr] = useState("")
    const secretPass = "XkhZG4fW2t2W"; // lol

    useEffect(() => {
        //console.log("FUCK!!!")
        const dbRef = ref(getDatabase());
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                get(child(dbRef, `users/${uid}`)).then((snapshot) => {
                    if (snapshot.exists()) {
                        setCardInfo({
                            userid: snapshot.val().uid,
                            ccn1: CryptoJS.AES.decrypt(snapshot.val().ccn1, secretPass).toString(CryptoJS.enc.Utf8),
                            ccn1type: CryptoJS.AES.decrypt(snapshot.val().ccn1type, secretPass).toString(CryptoJS.enc.Utf8),
                            ccn1expdate: CryptoJS.AES.decrypt(snapshot.val().ccn1expdate, secretPass).toString(CryptoJS.enc.Utf8),
                            ccn1address: CryptoJS.AES.decrypt(snapshot.val().ccn1address, secretPass).toString(CryptoJS.enc.Utf8),
                            ccn1citystate: CryptoJS.AES.decrypt(snapshot.val().ccn1citystate, secretPass).toString(CryptoJS.enc.Utf8),
                            ccn1zip: CryptoJS.AES.decrypt(snapshot.val().ccn1zip, secretPass).toString(CryptoJS.enc.Utf8),
                        })
                        if (snapshot.val().ccn1 && snapshot.val().ccn1type && snapshot.val().ccn1expdate && snapshot.val().ccn1address && snapshot.val().ccn1citystate && snapshot.val().ccn1zip) {
                            setDisabled(false)
                        }
                    }
                }).catch((error) => {
                    console.error(error);
                });
            }
        });

        get(child(dbRef, `movies/${params.id}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setMovieName(snapshot.val().movie_name)
            }
        }).catch((error) => {
            console.error(error);
        });

        get(child(dbRef, `showtimes/${props.currentOrder.showtime}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setShowtimeStr(snapshot.val().showtimeMonth + '/' + snapshot.val().showtimeDay + '/' + snapshot.val().showtimeYear + ', ' + snapshot.val().showtimeHour + ':' + snapshot.val().showtimeMinute)
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    // WOO DECORATOR BULLHECK THAT IS COMPLETELY UNECESSARY
    var order = {
        tickets: [],
        seats: [props.currentOrder.seats],
        pricetotal: 0,
        userid: cardInfo.userid,
        promocode: "",
        ccn: "",
        ccntype: "",
        ccnexpdate: "",
        ccnaddress: "",
        ccncitystate: "",
        ccnzip: "",
        showtimeid: props.currentOrder.showtime,
        showtimestr: showtimeStr,
        movieid: params.id,
        moviename: movieName,
    }
    const addChildTicket = (ticket) => {
        order.tickets = [...order.tickets, ticket]
        order.pricetotal += 10
    }
    const addTeenTicket = (ticket) => {
        order.tickets = [...order.tickets, ticket]
        order.pricetotal += 12
    }
    const addAdultTicket = (ticket) => {
        order.tickets = [...order.tickets, ticket]
        order.pricetotal += 15
    }

    var promoAdded = false
    const handlePromo = (values) => {

    }

    const handleCardChange = (e) => {
        setSelectedCard(e.target.value);
    };

    const card1 = {
        name: "Card 1",
    };

    const card2 = {
        name: "Card 2",
    };

    const handleSubmit = (values) => {
        console.log(order)
        console.log(values)

        if (values.card == "card1") {
            order.ccn = cardInfo.ccn1
            order.ccntype = cardInfo.ccn1type
            order.ccnexpdate = cardInfo.ccn1expdate
            order.ccnaddress = cardInfo.ccn1address
            order.ccncitystate = cardInfo.ccn1citystate
            order.ccnzip = cardInfo.ccn1zip
        } else {
            order.ccn = values.cardccn
            order.ccntype = values.cardtype
            order.ccnexpdate = values.cardexpdate
            order.ccnaddress = values.cardaddress
            order.ccncitystate = values.cardcitystate
            order.ccnzip = values.cardzip
        }

        order.ccn = CryptoJS.AES.encrypt(order.ccn, secretPass).toString();
        order.ccnexpdate = CryptoJS.AES.encrypt(order.ccnexpdate, secretPass).toString();
        order.ccntype = CryptoJS.AES.encrypt(order.ccntype, secretPass).toString();
        order.ccnaddress = CryptoJS.AES.encrypt(order.ccnaddress, secretPass).toString();
        order.ccncitystate = CryptoJS.AES.encrypt(order.ccncitystate, secretPass).toString();
        order.ccnzip = CryptoJS.AES.encrypt(order.ccnzip, secretPass).toString();

        const newPostKey = push(child(ref(database), 'posts')).key;
        const db = getDatabase();
        set(ref(db, 'orders/' + newPostKey), order)
            .then(() => {
                message.success("Successfully booked order " + newPostKey)
                navigate("/booking/confirmation/" + newPostKey, {replace: true, state: {order}})
            })
            .catch((error) => {
                message.error(error.message)
            })
    }

    const navBack = () => {
        navigate("/booking/" + params.id)
    }

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <Card title="Order Summary">
                    <div className="section-title">{order.moviename}</div>
                    <Divider orientation="left"></Divider>

                    <div className="section-title-checkout">Tickets:</div>
                    {props.currentOrder.tickets && props.currentOrder.tickets.map((ticket) => {
                        var pricing = 0;
                        switch (ticket.age) { // design patterns bad, upvotes to the left
                            case "Child":
                                addChildTicket(ticket.age)
                                pricing = 10;
                                break;
                            case "Teen":
                                addTeenTicket(ticket.age)
                                pricing = 12;
                                break;
                            case "Adult":
                                addAdultTicket(ticket.age)
                                pricing = 15;
                                break;
                            default:
                                console.log("how did you get this to print lol")
                        }
                        return (
                            <div>{ticket.age + " Ticket" + ": $" + pricing}</div>
                        )
                    })}
                    <Divider orientation="left"></Divider>
                    <div className="section-title-checkout">Seats:</div>
                    <div>{order.seats.toString()}</div>
                    <div className="section-title-minor">{"Total: $" + order.pricetotal}</div>

                    <div className="form-row">
                        <Form
                            name="checkout"
                            onFinish={handlePromo}
                            autoComplete="off"
                            method='POST'
                            scrollToFirstError
                        >
                            <Form.Item
                                name="promocode"
                            >
                                <Input
                                    placeholder="Promotional code"
                                    style={{
                                        width: 200,
                                    }}
                                />
                                <Button type="primary" htmlType="submit">Add promotion</Button>
                            </Form.Item>
                        </Form>
                    </div>

                </Card>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Card title="Payment Information">
                    <Form
                        form={checkoutForm}
                        name="checkout"
                        onFinish={handleSubmit}
                        autoComplete="off"
                        method='POST'
                        scrollToFirstError
                    >
                        <div>
                            <Form.Item
                                name="card"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select a payment method!'
                                    },
                                ]}
                            >
                                <Radio.Group onChange={handleCardChange} value={selectedCard}>
                                    <Radio value="card1" disabled={disabled}>
                                        Pay with saved card {disabled ? "(No saved card)" : "- xxxx xxxx xxxx " + cardInfo.ccn1.substring(cardInfo.ccn1.length - 4, cardInfo.ccn1.length)}
                                    </Radio>
                                    <Radio value="newCard">Use a new card</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </div>

                        {selectedCard === "newCard" && (
                            <div>
                                <div className="form-row">
                                    <Form.Item
                                        name="cardccn"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your credit card number!',
                                            },
                                            {
                                                pattern: new RegExp(/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/),
                                                message: 'Not a valid credit card number',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="CC Number" />
                                    </Form.Item>
                                    <Form.Item
                                        name="cardtype"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input the credit card type!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Card Type" />
                                    </Form.Item>
                                </div>
                                <div className="form-row">
                                    <Form.Item
                                        name="cardexpdate" rules={[
                                            {
                                                required: true,
                                                message: 'Please input the expiration date!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Expiration Date" />
                                    </Form.Item>
                                    <Form.Item
                                        name="cardaddress" rules={[
                                            {
                                                required: true,
                                                message: 'Please input your billing address!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Address" />
                                    </Form.Item>
                                </div>
                                <div className="form-row">
                                    <Form.Item
                                        name="cardcitystate" rules={[
                                            {
                                                required: true,
                                                message: 'Please input your billing city/state!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="City/State" />
                                    </Form.Item>
                                    <Form.Item
                                        name="cardzip"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your billing zip code!',
                                            },
                                            {
                                                pattern: new RegExp(/^[0-9]+$/),
                                                message: 'Not a valid zip code',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Zip Code" />
                                    </Form.Item>
                                </div>
                            </div>
                        )}

                        <div style={{ marginTop: "20px" }}>
                            <Button type="primary" htmlType="submit">Confirm Payment</Button>
                            <Button style={{ marginLeft: "10px" }} onClick={navBack}>Cancel</Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default CheckoutPage;
