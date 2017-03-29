function Patient(fhirpatient) {

    var patient = fhirpatient;
    var savedJSON = fhirpatient;

    return {
        "id": function (newId) {
            if (arguments.length > 0)
                patient.id = newId;
                return patient.id;
        },

        "firstname": function (newFirstName) {
            if (arguments.length > 0)
                updatePatientName(newFirstName, getLastName());
            return getFirstName();
        },

        "lastname": function (newLastName) {
            if (arguments.length > 0)
                updatePatientName(getFirstName(), newLastName);
            return getLastName();
        },

        "fullname": function () {
            if (patient.name) {
                var nameElement = patient.name.find(function (element) {
                    return (element.use == "usual");
                });

                if (nameElement)
                    return nameElement.given + " " + nameElement.family;
            }
            return undefined;
        },

        "geschlecht": function (newGender) {
            if (arguments.length > 0)
                patient.gender = newGender;
                return patient.gender;
        },

        "geburtstag": function (newBirthday) {
            if(arguments > 0)
            patient.birthDate = newBirthday;
            return new Datum(new Date(patient.birthDate)).dateString();
        },

        "plz": function (newPostalCode) {
            if (arguments.length > 0)
                updatePatientAdress(getCity(), getCountry(), newPostalCode);
            return getPostalCode();
        },

        "stadt": function (newCity) {
            if (arguments.length > 0)
                updatePatientAdress(newCity, getCountry(), getPostalCode());
            return getCity();
        },

        "land": function (newCountry) {
                if (arguments.length > 0)
                    updatePatientAdress(getCity(), newCountry, getPostalCode());
                return getCountry();
        },

        "save": function(){
        savedJSON = JSON.stringify(patient);
        },

        "storedPatient": function () {
        return Patient(JSON.parse(savedJSON));
    }

    }

    function updatePatientName(firstname, lastname) {
        nameElement = {
            "family": lastname,
            "given": firstname,
            "use": "usual"
        };
        patient.name = [nameElement];
    }

    function updatePatientAdress(city, country, postalCode) {
        adressElement = {
            "city": city,
            "country": country,
            "postalCode": postalCode,
            "use": "home"
        };
        patient.address = [adressElement];

    }

    function getFirstName() {
        if (patient.name) {
            var nameElement = patient.name.find(function (element) {
                return (element.use == "usual");
            });
            if (nameElement)
                return nameElement.given;
        }
        return undefined;
    }

    function getLastName() {
        if (patient.name) {
            var nameElement = patient.name.find(function (element) {
                return (element.use == "usual");
            });
            if (nameElement)
                return nameElement.family;
        }
        return undefined;
    }

    function getPostalCode() {
        if (patient.name) {
            var addressElement = patient.address.find(function (element) {
                return (element.use == "home");
            });
            if (addressElement)
                return addressElement.postalCode;
        }
        return undefined;
    }

    function getCity() {
        if (patient.name) {
            var addressElement = patient.address.find(function (element) {
                return (element.use == "home");
            });
            if (addressElement)
                return addressElement.city;
        }
        return undefined;
    }

    function getCountry() {
        if (patient.address) {
            var addressElement = patient.address.find(function (element) {
                return (element.use == "home");
            });
            if (addressElement)
                return addressElement.country;
        }
        return undefined;
    }
    
}