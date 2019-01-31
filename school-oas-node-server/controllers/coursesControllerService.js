'use strict'

let courses = require('./Data/Courses');

module.exports.getCourses = function getCourses(req, res, next) {

  res.send(courses);

};

module.exports.addCourse = function addCourse(req, res, next) {

  req.courses.value.id = IncrementId(courses.array.courses);

  courses.array.courses.push(req.courses.value);

  res.send({
    message: 'Course added'
  });
};

function IncrementId(array) {
  if (array.length > 0)
    return array[array.length - 1].id + 1;
  else
    return 0;
}