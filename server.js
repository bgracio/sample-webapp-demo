const configs = require('./configs');
const express = require('express');

const mongoose = require('mongoose');
mongoose.connect(configs.mongodb.url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const studentsAPI = require('./models/students')(mongoose);

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/api/students', async (req, res) => {
   var students = await studentsAPI.getStudents();
   res.json(students);
});

app.put('/api/student', async (req, res) => {
   var student = {
      _id: req.body._id,
      name: req.body.name,
      country: req.body.country,
      active: req.body.active,
      age: req.body.age
   }

   var student = await studentsAPI.updateStudent(student._id, student);
   res.json(student);
});

app.post('/api/student', async (req, res) => {
   var student = {
      name: req.body.name,
      country: req.body.country,
      active: req.body.active,
      age: req.body.age,
      photo: req.body.photo
   }

   await studentsAPI.createStudent(student);
   res.json(student);
});

app.get('/api/student/:student_id', async (req, res) => {
   var student = await studentsAPI.getStudent(req.params.student_id);
   res.json(student);
});

app.delete('/api/student/:student_id', async (req, res) => {
   var student = await studentsAPI.deleteStudent(req.params.student_id);
   res.json(student);
});

app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Listening on port ${port}!`));