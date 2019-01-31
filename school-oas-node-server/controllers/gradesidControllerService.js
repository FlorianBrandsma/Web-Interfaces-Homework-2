'use strict'

let grades = require('./Data/Grades');

module.exports.getGradeById = function getGradeById(req, res, next) {

  const index = grades.array.grades.findIndex(x => x.id == req.id.value);

  if (index != -1)
    res.send(grades.array.grades[index]);
  else
    res.send('grade not found');

};

module.exports.funcgradesidPARAMETERS = function funcgradesidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcgradesidPARAMETERS'
  });
};

module.exports.updateGrade = function updateGrade(req, res, next) {

  const index = grades.array.grades.findIndex(x => x.id == req.id.value);

  if (index != -1) {
    res.send('Updated grade');

    req.grades.value.courseId = grades.array.grades[index].courseId;
    req.grades.value.studentId = grades.array.grades[index].studentId;
    req.grades.value.id = grades.array.grades[index].id;

    grades.array.grades[index] = req.grades.value;
  } else
    res.send('grade does not exist');
};

module.exports.deleteGrade = function deleteGrade(req, res, next) {

  const gradeIndex = grades.array.grades.findIndex(x => x.id == req.id.value);

  if (gradeIndex != -1) {

    res.send('Deleted grade: ' + grades.array.grades[gradeIndex].grade);
    grades.array.grades.splice(gradeIndex, 1);
  } else
    res.send('Grade does not exist');
};