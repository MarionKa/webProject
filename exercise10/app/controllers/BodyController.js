fhirApp.controller("BodyController", function ($scope) {
    // Datum im internationalen Format:
    //$scope.date = new Date().toDateString();
    // Datum im deutschen Format:
    //$scope.date = new Datum(new Date()).toDateString();
    $scope.date = new Datum().dateString();
});