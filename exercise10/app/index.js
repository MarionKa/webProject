module.exports = function(passport, app, router) {

  app.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

  app.get('/login', function(req, res) {
    res.render('login', { title: 'Login' });
  });

  app.post('/dologin',
    passport.authenticate('local-login', {
      successRedirect : '/loginuser',
      failureRedirect : '/login'
    })
  );

  app.get('/loginuser', isLoggedIn, function(req, res) {
    res.render('userstart', { user: req.user });
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

};

function isLoggedIn(req, res, next) {

  if (req.isAuthenticated())
    return next();

  res.redirect('/login');
}





/* Einbinden der Dateien */
src="lib/es6-shim.min.js"
src="lib/jquery-1.12.0.min.js"
src="lib/bootstrap.min.js"
src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"
src="lib/angular.min.js""></script>"
src="lib/angular-route.min.js"
src="lib/ui-bootstrap-1.2.1.min.js"
src="scripts/app.js"
src="scripts/Datum.js"
src="scripts/Student.js"
src="scripts/landung.js"
src="controllers/BodyController.js"
src="controllers/MoonController.js"
src="controllers/PatientDetailsController.js"
src="controllers/NavbarController.js"
src="controllers/PatientListController.js"
src="services/FhirService.js"