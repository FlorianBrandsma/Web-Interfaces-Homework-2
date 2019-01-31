'use strict'

var vargradesidController = require('./gradesidControllerService');

module.exports.getGradeById = function getGradeById(req, res, next) {
  vargradesidController.getGradeById(req.swagger.params, res, next);
};

module.exports.funcgradesidPARAMETERS = function funcgradesidPARAMETERS(req, res, next) {
  vargradesidController.funcgradesidPARAMETERS(req.swagger.params, res, next);
};

module.exports.updateGrade = function updateGrade(req, res, next) {
  vargradesidController.updateGrade(req.swagger.params, res, next);
};

module.exports.deleteGrade = function deleteGrade(req, res, next) {
  vargradesidController.deleteGrade(req.swagger.params, res, next);
};