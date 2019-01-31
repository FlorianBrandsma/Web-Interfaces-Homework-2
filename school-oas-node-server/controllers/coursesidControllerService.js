'use strict'

let courses = require('./Data/Courses');

module.exports.getCourseById = function getCourseById(req, res, next) {

  const index = courses.array.courses.findIndex(x => x.id == req.id.value);

  if (index != -1)
    res.send(courses.array.courses[index]);
  else
    res.send('Course not found');

};

module.exports.funccoursesidPARAMETERS = function funccoursesidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursesidPARAMETERS'
  });
};

module.exports.updateCourse = function updateCourse(req, res, next) {

  const index = courses.array.courses.findIndex(x => x.id == req.id.value);

  if (index != -1) {
    res.send('Updated ' + courses.array.courses[index].name);

    req.courses.value.id = courses.array.courses[index].id;

    courses.array.courses[index] = req.courses.value;
  } else
    res.send('Course does not exist');
};

module.exports.deleteCourse = function deleteCourse(req, res, next) {

  const courseIndex = courses.array.courses.findIndex(x => x.id == req.id.value);

  let output = "";

  if (courseIndex != -1) {
    let grades = require('./Data/Grades');
    const gradeIndex = grades.array.grades.findIndex(x => x.courseId == courses.array.courses[courseIndex].id);

    if (gradeIndex != -1) {
      output += " and its grade: " + grades.array.grades[gradeIndex].grade;
      grades.array.grades.splice(gradeIndex, 1);
    }

    res.send('Deleted ' + courses.array.courses[courseIndex].name + output);
    courses.array.courses.splice(courseIndex, 1);
  } else
    res.send('course does not exist');
};