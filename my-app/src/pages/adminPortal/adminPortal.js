import React, { useState } from 'react';
import './adminPortal.css'
import { Button, Space } from 'antd';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import promotionAdd from '../../PromotionAdd';
import ManageMovies from '../../ManageMovies';
import AddMovies from '../../addmovies';

function AdminPortal() {
    return (

        <div className="container">
            <header className="header text">
                <h1 classname='text'>Admin Portal</h1>
            </header>
            <div className="content">
                <div className="left-section">
                    <h2 className="text">Manage Movies</h2>
                    <div className="buttons">
                        {/* <button>Add/Remove Movies</button> */}
                        <NavLink to="/admin/addmovies" ><button type="primary">Add & Remove Movies </button></NavLink>
                        <NavLink to="/admin/scheduleshowtimes" ><button type = "primary">Manage movie showtimes</button></NavLink>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="right-section">
                    <h2 className="text">Manage Promotions</h2>
                    <div className="buttons">

                        <NavLink to="/admin/PromotionAdd" ><button type="primary">Create promotional codes</button></NavLink>

                        <button>Remove existing promotions</button>
                        <button>View current promotions</button>
                    </div>
                    <h2 className="text">Manage Users</h2><div className="buttons">
                        <button>Manage user account status</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default AdminPortal;