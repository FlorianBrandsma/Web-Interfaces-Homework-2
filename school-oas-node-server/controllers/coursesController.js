'use strict'

var varcoursesController = require('./coursesControllerService');

module.exports.getCourses = function getCourses(req, res, next) {
  varcoursesController.getCourses(req.swagger.params, res, next);
};

module.exports.addCourse = function addCourse(req, res, next) {
  varcoursesController.addCourse(req.swagger.params, res, next);
};