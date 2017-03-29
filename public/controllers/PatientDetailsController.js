repoApp.controller("PatientDetailsController",
    function ($scope, $routeParams, RepoService) {
        $scope.isEditMode = false;

        $scope.startEdit = function () {
            $scope.patient.save();
            $scope.isEditMode = true;
        }

        $scope.acceptEdit = function () {
            $scope.isEditMode = false;
        }

        $scope.abortEdit = function () {
            newPatient($scope.patient.storedPatient());
            $scope.isEditMode = false;
        }
        
        function newPatient(patient) {
            $scope.patient = patient;
            $scope.dateHelper = patient.geburtstag();
        }

    RepoService.readById($routeParams.id).then(function (patient) {
        newPatient(patient);
    })

    $scope.$watch('dateHelper', function (newValue, oldValue) {
        if ($scope.patient && newValue)
            $scope.patient.geburtstag(newValue);
    });

});
