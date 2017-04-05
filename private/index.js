var express = require('express');
var passport = require('passport');
var mysql = require('mysql');
var localPassport = require('passport-local');
var logger = require('morgan');
var session = require('express-session');

var app = express();

app.use(express.static('public'));

require('./router')(app);

app.listen(8080, function() {
  console.log('Server listen on port 8080');
})


// Router exportiert eine Funktion, die als Argument eine Referenz auf die Applikation erhält, 
// an die die Routen gebunden werden sollen.
// module.exports = function(app) {  //function(passport, app, router)

//   app.get('/', function(req, res) {
//     res.render('index', { title: 'Express' });
//   });

//   app.get('/login', function(req, res) {
//     res.render('login', { title: 'Login' });
//   });

//   app.post('/dologin',
//     passport.authenticate('local-login', {
//       successRedirect : '/loginuser',
//       failureRedirect : '/login'
//     })
//   );

//   app.get('/loginuser', isLoggedIn, function(req, res) {
//     res.render('userstart', { user: req.user });
//   });

//   app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/login');
//   });

// };

// function isLoggedIn(req, res, next) {

//   if (req.isAuthenticated())
//     return next();

//   res.redirect('/login');
// }





