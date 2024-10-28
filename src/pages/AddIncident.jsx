// src/pages/AddIncident.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';

const AddIncident = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [details, setDetails] = useState('');
  const [recordedBy, setRecordedBy] = useState('');
  const [actionTaken, setActionTaken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock saving logic; replace with actual API call later
    console.log("Incident Added:", { date, type, details, recordedBy, actionTaken });
    navigate('/incidents');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Add Incident</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Behavior Incident">Behavior Incident</option>
              <option value="Positive Recognition">Positive Recognition</option>
              <option value="Intervention">Intervention</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="recordedBy" className="block text-sm font-medium text-gray-700">
              Recorded By
            </label>
            <input
              type="text"
              id="recordedBy"
              value={recordedBy}
              onChange={(e) => setRecordedBy(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name of person recording"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="actionTaken" className="block text-sm font-medium text-gray-700">
              Action Taken
            </label>
            <input
              type="text"
              id="actionTaken"
              value={actionTaken}
              onChange={(e) => setActionTaken(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Action taken"
            />
          </div>
          <Button type="submit" className="w-full">Add Incident</Button>
        </form>
      </div>
    </div>
  );
};

export default AddIncident;
