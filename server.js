var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const jsonParser = require('body-parser').json();
app.use(bodyParser.json()); 
var mongoose = require('mongoose');
require('./server/config/mongoose.js');
const checkForSession = require('./server/config/checkForSession');

const session = require('express-session');
app.use( session({
  secret: 'blablabla',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}) );
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, '/ppm/dist')));
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
mongoose.connect('mongodb://localhost/marketplace');
app.listen(8000, function() {
  console.log("______________________________________________________________")
  console.log("Welcome ot MarketPlace, comrade! Please go to localhost: 8000");
  console.log("______________________________________________________________")
})


