'use strict'

let students = require('./Data/Students');

module.exports.getStudents = function getStudents(req, res, next) {

  res.send(students);

};

module.exports.addStudent = function addStudent(req, res, next) {

  req.students.value.id = IncrementId(students.array.students);

  students.array.students.push(req.students.value);

  res.send({
    message: 'Student added'
  });
};

function IncrementId(array) {
  if (array.length > 0)
    return array[array.length - 1].id + 1;
  else
    return 0;
}