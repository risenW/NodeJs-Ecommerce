var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var firebase = require("firebase");
var session = require('express-session');
var firebase = require('firebase');


var admin = require("firebase-admin");
var serviceAccount = require("serviceAccountKey.json");


// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var admin = {
  apiKey: "AIzaSyDY0oLIGFiimVIkjqAq2bA7_rdIp-4sIKk",
  authDomain: "humbilityshop.firebaseapp.com",
  databaseURL: "https://humbilityshop.firebaseio.com",
  projectId: "humbilityshop",
  storageBucket: "humbilityshop.appspot.com",
  messagingSenderId: "864018031617"};
firebase.initializeApp(admin);

// Get a reference to the database service
var database = firebase.database();
var storage = firebase.storage;

var index = require('./routes/index');

var app = express();

// view engine setup
app.engine('handlebars',expressHbs({defaultLayout: 'layout'}));
app.set('view engine', '.handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//middleare for sessions
app.use(session({secret: 'humbilitySessionKey', resave: false,saveUninitialized:false}));
//initialization of flash

app.use('/', index);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.listen(3000, function(){
//   console.log("Server started");
// })

module.exports = app;
