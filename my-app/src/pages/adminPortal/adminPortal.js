import React, { useState } from 'react';
import './adminPortal.css'
import { Button, Space } from 'antd';
function adminPortal() {
    return (
        <div className="container">
            <header className="header text">
                <h1 classname= 'text'>Admin Portal</h1>
            </header>
            <div className="content">
                <div className="left-section">
                    <h2 className= "text">Manage Movies</h2>
                    <div className="buttons">
                        <button>Add movie</button>
                        <button>Remove movie</button>
                        <button>Edit Movie Scheduling</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="right-section">
                    <h2 className="text">Manage Promotions</h2>
                    <div className="buttons">
                        <button>Make new promotion</button>
                        <button>Remove existing promotions</button>
                        <button>View current promotions</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default adminPortal;