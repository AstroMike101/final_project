import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, NavLink } from 'react-router-dom';
import './registrationConfirmation.css'
import { Button, Space } from 'antd';
function registrationConfirmation() {
    return (

        <div class = 'container'>
            <h1 class='text'>Registration Confirmation </h1>

            <h2 class= 'text text2'>A confirmation email has been sent to your email!</h2>


        


 
            <NavLink to="/" style={{ textDecoration: 'none' }}><button class = "btn"><a href= '#'>Return to homepage</a></button>     </NavLink>         
           
            

      



        </div>




    )



 }

export default registrationConfirmation;