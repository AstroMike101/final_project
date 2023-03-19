const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// create an Express application
const app = express();

// enable parsing of JSON request bodies
app.use(express.json());