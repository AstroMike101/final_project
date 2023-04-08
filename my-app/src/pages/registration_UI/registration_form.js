import React, { useState, setState } from 'react';
import { database } from '../../firebase_setup/firebase.js'
import { ref, push, child, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { message, Form, Input, Checkbox, Button } from 'antd';
import './style.css';
import '../../index.css';
function RegistrationForm() {
    const handleSubmit = (values) => {
        let obj = {
            uid: '',
            name: values.name,
            phone: values.phone,
            email: values.email,
            //password: values.password,

            billingaddress: values.billingaddress,
            billingcitystate: values.billingcitystate,
            billingzip: values.billingzipcode,

            ccn1: values.ccn,
            ccn1type: values.cardtype,
            ccn1expdate: values.expdate,
            ccn1address: values.cardaddress,
            ccn1citystate1: values.cardcitystate,
            ccn1zip: values.cardzipcode,

            isAdmin: false,
            isSubscribedToPromotions: values.subpromo,
        }

        // worst line of code i've ever written in my life
        if (obj["isSubscribedToPromotions"] != true) obj["isSubscribedToPromotions"] = false
        console.log(values)
        console.log(obj)

        debugger;
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, obj["email"], values["password"])
            .then((userCredential) => {
                const user = userCredential.user;
                message.success("Registration success!")
                obj["uid"] = user.uid;
                sendEmailVerification(user)
                    .then(() => {
                        message.success("A confirmation email has been sent to your email address.")
                        updates['/users/' + newPostKey] = obj;
                        return update(ref(database), updates);
                    })
                    .catch((error) => {
                        //message.error("We could not send the verification email - contact an admin")
                        message.error(error.message)
                    });
            })
            .catch((error) => {
                message.error(error.message)
            })
        //console.log(firstName,lastName,email,password,confirmPassword);
    }

    return (
        <div className="form">
            <div class="section-title">Register an Account</div>
            <div>Fields marked with an * are required.</div>
            <Form
                name="registration"
                style={{
                    maxWidth: 700,
                }}
                initialValues={{
                    billingaddress: '',
                    billingcitystate: '',
                    billingzipcode: '',

                    ccn: '',
                    cardtype: '',
                    expdate: '',
                    cardaddress: '',
                    cardcitystate: '',
                    cardzipcode: '',

                    isSubscribedToPromotions: false,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
                method='POST'
                scrollToFirstError
            >
                <div className="form-section">
                    <div className="section-title-minor">Personal Information</div>
                    <div className="form-row">
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Name*" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    pattern: new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),
                                    message: 'Not a valid phone number',
                                },
                                {
                                    required: true,
                                    message: 'Please input your phone number',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Phone Number*" />
                        </Form.Item>
                    </div>
                    <div className="form-row">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Not a valid email',
                                },
                                {
                                    required: true,
                                    message: 'Please input your email',
                                },
                            ]}
                        >
                            <Input placeholder="Email*" />
                        </Form.Item>
                    </div>
                    <div className="form-row">
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password*" />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Confirm Password*" />
                        </Form.Item>
                    </div>

                    <div class="form-section">
                        <div class="section-title-minor">Billing Information</div>
                        <div className="form-row">
                            <Form.Item
                                name="billingaddress"
                            >
                                <Input placeholder="Address" />
                            </Form.Item>
                            <Form.Item
                                name="billingcitystate"
                            >
                                <Input placeholder="City/State" />
                            </Form.Item>
                        </div>

                        <div className="form-row">
                            <Form.Item
                                name="billingzipcode"
                                rules={[
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

                    <div className="form-section">
                        <div class="section-title-minor">Payment Information</div>
                        {/* There's a regex to validate cc numbers but this is going to be really annoying when trying to make test accounts */}
                        {/* /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/ */}
                        <div className="form-row">
                            <Form.Item
                                name="ccn"
                                rules={[
                                    {
                                        pattern: new RegExp(/^[0-9]+$/),
                                        message: 'Not a valid credit card number',
                                    },
                                ]}
                            >
                                <Input placeholder="CC Number" />
                            </Form.Item>
                            <Form.Item
                                name="cardtype"
                            >
                                <Input placeholder="Card Type" />
                            </Form.Item>
                        </div>
                        <div className="form-row">
                            <Form.Item
                                name="expdate"
                            >
                                <Input placeholder="Expiration Date" />
                            </Form.Item>
                            <Form.Item
                                name="cardaddress"
                            >
                                <Input placeholder="Address" />
                            </Form.Item>
                        </div>
                        <div className="form-row">
                            <Form.Item
                                name="cardcitystate"
                            >
                                <Input placeholder="City/State" />
                            </Form.Item>
                            <Form.Item
                                name="cardzipcode"
                                rules={[
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

                    <div className="form-row">
                        <Form.Item
                            name="subpromo"
                            valuePropName="checked"
                        >
                            <Checkbox>
                                Subscribe to promotions
                            </Checkbox>
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </div>

                </div>
            </Form>
        </div>

    )
}

export default RegistrationForm