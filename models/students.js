module.exports = (mongoose) => {
    var Student = mongoose.model('student', {
        name: {type: String, default: ''},
        country: {type: String, default: ''},
        active: {type: Boolean, default: false},
        age: {type: Number, default: 0},
        photo: {type: String, default: ''},
    });

    var api = {};

    api.getStudents = () => {
        /*
        return new Promise((resolve, reject) => {
            Student.find((error, students) => {
                if (error) {
                    return reject(error);
                }

                return resolve(students);
            });
        });
        */

        return Student.find();
    }

    api.getStudent = (studentId) => {
        return Student.findById(studentId);
    }

    api.deleteStudent = (studentId) => {
        return Student.findByIdAndDelete(studentId);
    }

    api.updateStudent = (studentId, student) => {
        return Student.update({ _id: studentId}, student);
    }

    api.createStudent = (student) => {
        var newStudent = Student();
        newStudent.name = student.name;
        newStudent.country = student.country;
        newStudent.active = student.active;
        newStudent.age = student.age;
        newStudent.photo = student.photo;
        return newStudent.save();
    }

    return api;
};
