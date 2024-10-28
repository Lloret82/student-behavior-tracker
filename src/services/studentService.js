// src/services/studentService.js
import studentsData from '../data/students.json';

export const fetchStudents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(studentsData);
    }, 300);
  });
};
