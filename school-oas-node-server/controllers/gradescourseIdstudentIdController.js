'use strict'

var vargradescourseIdstudentIdController = require('./gradescourseIdstudentIdControllerService');

module.exports.addGrade = function addGrade(req, res, next) {
  vargradescourseIdstudentIdController.addGrade(req.swagger.params, res, next);
};

module.exports.funcgradescourseIdstudentIdPARAMETERS = function funcgradescourseIdstudentIdPARAMETERS(req, res, next) {
  vargradescourseIdstudentIdController.funcgradescourseIdstudentIdPARAMETERS(req.swagger.params, res, next);
};