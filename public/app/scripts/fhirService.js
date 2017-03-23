var student = {};

$.getJSON("data/student.json", function (data) {
    student = Student(data);
})