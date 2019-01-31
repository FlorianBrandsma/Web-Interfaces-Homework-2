'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.getStudents = function getStudents(req, res, next) {
  varstudentsController.getStudents(req.swagger.params, res, next);
};

module.exports.addStudent = function addStudent(req, res, next) {
  varstudentsController.addStudent(req.swagger.params, res, next);
};