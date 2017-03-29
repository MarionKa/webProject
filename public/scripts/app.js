var repoApp = angular.module("repoApp", ['ngRoute']);

repoApp .config(function($routeProvider) {

    $routeProvider.when('/anmeldung', {
        templateUrl: 'templates/AnmeldungTemplate.html',
    });

    $routeProvider.when('/registrierung', {
        templateUrl: 'templates/RegistrierungTemplate.html',
    });

    $routeProvider.when('/passwort', {
        templateUrl: 'templates/KennwortVergessenTemplate.html',
    });

    $routeProvider.when('/persoenlich', {
        templateUrl: 'templates/PersoenlichTemplate.html',
    });

    $routeProvider.when('/professor', {
        templateUrl: 'templates/ProfessorTemplate.html',
    });

    $routeProvider.when('/abmeldung', {
        templateUrl: 'templates/AbmeldungTemplate.html',
    });

    $routeProvider.when('/beantragung', {
        templateUrl: 'templates/BeantragungTemplate.html',
    });


    // optional bei Klicken des Rehs Erklärung der Repositories
    $routeProvider.when('/repository', {
        templateUrl: 'templates/RepositoryTemplate.html',
    });


 $routeProvider.otherwise({
     redirectTo: '/anmeldung'
    });

})


//function loadTemplates() {
//    $('#navigation').load('templates/NavbarTemplate.html');
//    $('#content').load('templates/AboutTemplate.html');
//}

//$(document).ready(loadTemplates);


//alert("Es ist 1996 meine Freundin ist weg und bräunt sich");