import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(
  session({
    key: "soft",
    secret: "sisters",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db'
});

function handleDisconnect() {

  connection.connect(function(err) {              
    if(err) {                                     
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); 
    } 
    else {
      console.log("Database connected successfully");
    }                                   
  });                                     

  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();                     
    } else {                                  
      throw err;                                 
    }
  });
}

setInterval(function () {
connection.query('SELECT 1');
}, 5000);

handleDisconnect();

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
    connection.query(
      "INSERT INTO users (email, name, password, role) VALUES (?,?,?,?)",
      [email, name, password, role],
      (err, result) => {
        res.send({ err: err });
      }
    );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
    connection.query(
      "SELECT * FROM users WHERE email=?",
      email,
      (err, result) => {
        if(!result) {res.send({ err: err });}
        else {
          if(result[0].password != password) {if(!result) {res.send({ err: "Wrong password!" });}}
        }
      }
    );
});

app.listen(3001, () => {
  console.log("running server");
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
