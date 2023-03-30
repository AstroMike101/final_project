import './index.css';
import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { Form, Input, Button, Typography } from 'antd';
import firebase from './firebase_setup/firebase.js'
import { useNavigate } from "react-router-dom";


const { Title } = Typography;

const AdminLoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleFinish = async (values) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(values.username, values.password);
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="admin-login-container">
            <div className="admin-login-box">
                <Title level={2} className="admin-login-title">Admin Login</Title>
                {error && <div className="admin-login-error">{error}</div>}
                <Form onFinish={handleFinish}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" className="admin-login-input" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className="admin-login-input" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="admin-login-button">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
