'use strict'

let students = require('./Data/Students');

module.exports.getStudentById = function getStudentById(req, res, next) {
  
  const index = students.array.students.findIndex(x => x.id == req.id.value);
  
  if(index != -1)
    res.send(students.array.students[index]);
  else
    res.send('Student not found');
};

module.exports.funcstudentsidPARAMETERS = function funcstudentsidPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsidPARAMETERS'
  });
};

module.exports.updateStudent = function updateStudent(req, res, next) {

  const index = students.array.students.findIndex(x => x.id == req.id.value);

  if(index != -1)
  {
      res.send('Updated ' + students.array.students[index].name);

      req.students.value.id = students.array.students[index].id;

      students.array.students[index] = req.students.value;    
  } else
      res.send('Student does not exist');
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {

  const studentIndex = students.array.students.findIndex(x => x.id == req.id.value);
        
  let output = "";

  if(studentIndex != -1)
  {
      let grades = require('./Data/Grades');
      const gradeIndex = grades.array.grades.findIndex(x => x.studentId == students.array.students[studentIndex].id);

      if(gradeIndex != -1)
      {
          output += " and its grade: " + grades.array.grades[gradeIndex].grade;
          grades.array.grades.splice(gradeIndex, 1);
      }

      res.send('Deleted ' + students.array.students[studentIndex].name + output);
      students.array.students.splice(studentIndex, 1);
  } else
      res.send('Student does not exist');
};