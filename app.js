var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require("dotenv");
dotenv.config();

var indexRouter = require('./routes/index');

const contacto = require('./routes/contacto');
const trabajos = require('./routes/trabajos');
const login = require('./routes/login');
const adminProductos = require('./routes/admin/productos');
const registro = require('./routes/registro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '1234',
  resave: true,
  saveUninitialized: true
}));



app.use('/', indexRouter);

app.use('/contacto',contacto);
app.use('/trabajos',trabajos);
app.use('/login',login);
app.use('/registro',registro);

// Admin

app.use('/admin/productos',adminProductos);


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
