'use strict'

let grades = require('./Data/Grades');

module.exports.getGrades = function getGrades(req, res, next) {

  res.send(grades);

};

