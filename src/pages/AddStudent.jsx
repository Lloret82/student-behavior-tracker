// src/pages/AddStudent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';


const AddStudent = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [parentContact, setParentContact] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock save logic; connect to API later
    console.log("Student Added:", { name, grade, parentContact });
    navigate('/students'); // Redirect back to the student list
  };

  return (
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter student's name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter grade"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="parentContact" className="block text-sm font-medium text-gray-700">
              Parent Contact
            </label>
            <input
              type="email"
              id="parentContact"
              value={parentContact}
              onChange={(e) => setParentContact(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter parent contact email"
            />
          </div>
          <Button type="submit" className="w-full">Add Student</Button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
