fhirApp.controller("PatientListController", function ($scope, FhirService) {

    FhirService.all().then(function (patients) {
        $scope.patients = patients;
    });
});