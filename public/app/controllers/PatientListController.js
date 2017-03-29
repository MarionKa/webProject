repoApp.controller("PatientListController", function ($scope, RepoService) {

    RepoService.all().then(function (patients) {
        $scope.patients = patients;
    });
});