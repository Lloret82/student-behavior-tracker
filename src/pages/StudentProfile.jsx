// src/pages/StudentProfile.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStudents } from '../services/studentService.js';
import Button from '../components/Button.jsx';

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [incidents, setIncidents] = useState([]);
  const [allStudents, setAllStudents] = useState([]);
  const [newIncident, setNewIncident] = useState({ studentId: parseInt(id), details: '', actionTaken: '', type: '' });

  useEffect(() => {
    const getStudent = async () => {
      const students = await fetchStudents();
      const studentData = students.find(s => s.id === parseInt(id));
      setStudent(studentData);
      setAllStudents(students); // Fetch all students

      // Fetch incidents from local storage or initialize
      const storedIncidents = JSON.parse(localStorage.getItem('incidents')) || [];
      const studentIncidents = storedIncidents.filter(inc => inc.studentId === parseInt(id));
      setIncidents(studentIncidents);
    };

    getStudent();
  }, [id]);

  const handleAddIncident = () => {
    // Create a unique ID for the new incident
    const newIncidentId = Date.now();
    const newIncidentData = { ...newIncident, id: newIncidentId, studentId: parseInt(newIncident.studentId) };
    
    // Get existing incidents from local storage, if any
    const storedIncidents = JSON.parse(localStorage.getItem('incidents')) || [];
    
    // Add the new incident to the list
    const updatedIncidents = [...storedIncidents, newIncidentData];
    
    // Save the updated list back to local storage
    localStorage.setItem('incidents', JSON.stringify(updatedIncidents));
    
    // Update local state to display the newly added incident
    setIncidents([...incidents, newIncidentData]);
    
    // Reset the form fields
    setNewIncident({ studentId: parseInt(newIncident.studentId), details: '', actionTaken: '', type: '' });
  };
  

  if (!student) return <p>Loading student data...</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Student Profile - {student.name}</h1>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>Parent Contact:</strong> {student.parentContact}</p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Add Incident</h2>
      <div className="bg-gray-100 p-4 rounded">
        <select
          className="w-full mb-4 p-2"
          value={newIncident.studentId}
          onChange={(e) => setNewIncident({ ...newIncident, studentId: parseInt(e.target.value) })}
        >
          <option value="">Select Student</option>
          {allStudents.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} - Grade {s.grade}
            </option>
          ))}
        </select>
        {/* Incident Type and Details */}
        <select
          className="w-full mb-4 p-2"
          value={newIncident.type}
          onChange={(e) => setNewIncident({ ...newIncident, type: e.target.value })}
        >
          <option value="">Select Type</option>
          <option value="Behavior Incident">Behavior Incident</option>
          <option value="Positive Recognition">Positive Recognition</option>
        </select>
        <textarea
          className="w-full p-2 mb-4"
          placeholder="Details"
          value={newIncident.details}
          onChange={(e) => setNewIncident({ ...newIncident, details: e.target.value })}
        />
        <input
          className="w-full p-2 mb-4"
          type="text"
          placeholder="Action Taken"
          value={newIncident.actionTaken}
          onChange={(e) => setNewIncident({ ...newIncident, actionTaken: e.target.value })}
        />
        <Button className="w-full" onClick={handleAddIncident}>Add Incident</Button>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Incidents</h2>
      <ul className="list-disc pl-6">
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Type:</strong> {incident.type} - {incident.details} (Action: {incident.actionTaken})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfile;
