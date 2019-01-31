'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.getGrades = function getGrades(req, res, next) {
  vargradesController.getGrades(req.swagger.params, res, next);
};