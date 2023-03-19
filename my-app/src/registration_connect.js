const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// create an Express application
const app = express();

// enable parsing of JSON request bodies
app.use(express.json());

// create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'user',
  password: 'mypassword'
});

// handle the registration form submission
app.post('/register_form', async (req, res) => {
  // get the user data from the form
  const { firstName, lastName, email, password } = req.body;

  try {
    // hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert the user into the database
    connection.query(
      'INSERT INTO user (userFirstName, userLastName, userType, userEmail, userPW) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, 1, email, hashedPassword],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error registering user');
        } else {
          res.send('User registered successfully');
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
});

// close the database connection when the Node.js process is terminated
process.on('SIGINT', () => {
  connection.end();
  process.exit();
});

// start the Express server
app.listen(3306, () => {
  console.log('Server started on port 3000');
});