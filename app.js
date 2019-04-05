var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var firebase = require('firebase');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signup');
var logInRouter = require('./routes/login');

var app = express();

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAinaEtiEi9WlOg3ZAnKdIrfQ76m8JBUzk",
  authDomain: "lotter-812fc.firebaseapp.com",
  databaseURL: "https://lotter-812fc.firebaseio.com",
  projectId: "lotter-812fc",
  storageBucket: "",
  messagingSenderId: "835057056350"
};

firebase.initializeApp(config);

global.db = firebase.database();
var ref = db.ref("/users");

ref.on("value", function (snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views', partialsDir: __dirname + '/views/partials/' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signUpRouter);
app.use('/users', usersRouter);
app.use('/login', logInRouter);

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
  res.render('error');
});

module.exports = app;
