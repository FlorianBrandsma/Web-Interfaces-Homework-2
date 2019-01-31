'use strict'

let grades = require('./Data/Grades');

module.exports.addGrade = function addGrade(req, res, next) {
  
  let students = require('./Data/Students');
  let courses = require('./Data/Courses');

  const courseIndex = courses.array.courses.findIndex(x => x.id == req.courseId.value);

  if (courseIndex != -1) {
    const studentIndex = students.array.students.findIndex(x => x.id == req.studentId.value);

    if (studentIndex != -1) {

      req.grades.value.courseId = courses.array.courses[courseIndex].id;
      req.grades.value.studentId = students.array.students[studentIndex].id;

      req.grades.value.id = IncrementId(grades.array.grades);

      grades.array.grades.push(req.grades.value);

      res.send('Grade added');

    } else {
      res.send('Student does not exist');
    }

  } else {
    res.send('Course does not exist');
  }

};

module.exports.funcgradescourseIdstudentIdPARAMETERS = function funcgradescourseIdstudentIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradescourseIdstudentIdPARAMETERS'
  });
};

function IncrementId(array) {
  if (array.length > 0)
    return array[array.length - 1].id + 1;
  else
    return 0;
}