var tokenChecker = require('./tokenChecker')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');


var usersRouter = require('./routes/users');
var messagesRouter = require('./routes/messages');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.use('/api/users',  usersRouter);
app.use('/api/messages', tokenChecker, messagesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error: 'error'});
});

module.exports = app;
