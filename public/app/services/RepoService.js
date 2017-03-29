repoApp.factory("RepoService", function ($http) {

    var patientArrayPromise = $http.get("data/patient.json")
    .then(function (response) {
        return [new Patient(response.data)];
    });

    function readAll() {
        return patientArrayPromise;
    }

    function readPatientById(id) {
        return patientArrayPromise.then(function (patientData) {
            return patientData.find(function (element) {
                return (element.id() == id);
            });
        });
    }

    return {
        "all":readAll, // Rückgabe des gesamten Array
        "readById": readPatientById, // Lesen eines Patientenaus dem Array
    }
});