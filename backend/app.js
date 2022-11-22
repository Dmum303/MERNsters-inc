// npm install --save-dev nodemon which auto runs server with command npm run devStart, then whenever save it reloads - should be a
// "devStart": "nodemon server.js" script in package.json

const createError = require('http-errors');
//installed npm install http-errors, Create HTTP errors for Express, Koa, Connect, etc. with ease.
const express = require('express');
const path = require('path');
// The Path module provides a way of working with directories and file paths - didn't install anything new
const logger = require('morgan');
// HTTP request logger middleware for node.js - npm install morgan --save
const JWT = require('jsonwebtoken');
//An implementation of JSON Web Tokens. npm install jsonwebtoken

const app = express();

// setup for receiving JSON
app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// middleware function to check for valid tokens
const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get('Authorization');

  if (authHeader) {
    token = authHeader.slice(7); // Remove 'bearer' and return the actual token
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: 'auth error' });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

//This is the temporary path as routes not created yet
app.get('/', (req, res) => {
  console.log('sever is working');
  //   res.sendStatus(500);
  res.send("I'm from the server whoo");
});

app.listen(3000);

// route setup to go here - not in use yet
// ------------------------------------

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: 'server error' });
});

module.exports = app;
