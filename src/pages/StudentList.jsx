import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/studentService.js';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getStudents = async () => {
      setLoading(true);
      const data = await fetchStudents();
      setStudents(data);
      setLoading(false);
    };

    getStudents();
  }, []);

  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  if (loading) {
    return <p className="text-center mt-6">Loading students...</p>;
  }

  return (
 

      <div className="ml-64 p-8 w-full pt-20">
        <div className="bg-white p-6 rounded-lg shadow-soft border border-muted">
          <h1 className="text-2xl font-bold mb-4 text-primary-dark">Student List</h1>
          <Button className="mb-3 bg-accent text-white" onClick={() => navigate("/add-student")}>
            Add Student
          </Button>
          <table className="w-full bg-background rounded-md">
            <thead>
              <tr className="bg-primary-dark text-white text-sm">
                <th className="py-2 px-3 text-left">Name</th>
                <th className="py-2 px-3 text-left">Grade</th>
                <th className="py-2 px-3 text-left">Parent Contact</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-primary-light/20 border-b last:border-none">
                  <td className="py-2 px-3 text-sm">
                    <button
                      className="text-accent-dark hover:underline"
                      onClick={() => navigate(`/student/${student.id}`)}
                    >
                      {student.name}
                    </button>
                  </td>
                  <td className="py-2 px-3 text-sm">{student.grade}</td>
                  <td className="py-2 px-3 text-sm">{student.parentContact}</td>
                  <td className="py-2 px-3 text-sm">
                    <Button className="bg-danger hover:bg-danger-dark" onClick={() => handleDelete(student.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default StudentList;
