import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink } from 'react-router-dom';
import { Card, Button, Form, Input, Select, DatePicker, Dropdown, Space, Checkbox, Row, Col, Radio, Divider } from 'antd';
import { FieldTimeOutlined, DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { Component, useState, useEffect } from "react";

import './index.css';
import BookMovie from './BookMovie.js'
import BookingConfirmation from './BookingConfirmation';






const CheckoutPage = (props) => {
    const params = useParams();
    const [selectedCard, setSelectedCard] = useState("card1");

    var numTickets = 0;
    var price = 0;

    const handleCardChange = (e) => {
        setSelectedCard(e.target.value);
    };

    const card1 = {
        name: "Card 1",
    };

    const card2 = {
        name: "Card 2",
    };

    const test = () => {
        console.log(props.currentOrder)
        props.currentOrder.tickets.map((ticket) => {
            console.log(ticket)
            numTickets++;
        })


    }

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                <Card title="Order Summary">
                    {props.currentOrder.tickets && props.currentOrder.tickets.map((ticket) => {
                        numTickets++;
                        return (
                            <div>{ticket.age + " Ticket"}</div>
                        )
                    })}

                    <div>{"Total: $"+ numTickets * 15}</div>

                    <div>
                    </div>

                </Card>
            </div>

            <div style={{ marginTop: "20px" }}>
                <Card title="Payment Information">
                    <div>
                        <Radio.Group onChange={handleCardChange} value={selectedCard}>
                            <Radio value="card1">
                                {card1.name} - {card1.cardNumber} ({card1.expiry})
                            </Radio>
                            <Radio value="card2">
                                {card2.name} - {card2.cardNumber} ({card2.expiry})
                            </Radio>
                            <Radio value="newCard">Add a new card</Radio>
                        </Radio.Group>
                    </div>

                    {selectedCard === "newCard" && (
                        <div>
                            <div>Cardholder Name:</div>
                            <input type="text" />
                            <div>Card Number:</div>
                            <input type="text" />
                            <div>Expiry Date:</div>
                            <input type="text" />
                            <div>CVV:</div>
                            <input type="text" />
                        </div>
                    )}

                    <div style={{ marginTop: "20px" }}>
                        <Button type="primary" onClick={test}>Confirm Payment</Button>
                        <Button style={{ marginLeft: "10px" }}>Cancel</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CheckoutPage;
