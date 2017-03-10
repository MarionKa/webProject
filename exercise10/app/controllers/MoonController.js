fhirApp.controller("MoonController", function ($scope) {

    $scope.$on('$viewContentLoaded', function () {
        simulation();
    });
});