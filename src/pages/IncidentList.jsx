// src/pages/IncidentList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchIncidents } from '../services/incidentService.js';
import Button from '../components/Button.jsx';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Add useNavigate here

  useEffect(() => {
    const getIncidents = async () => {
      setLoading(true);
      const data = await fetchIncidents();
      setIncidents(data);
      setLoading(false);
    };

    getIncidents();
  }, []);

  const handleAddIncident = () => {
    navigate('/add-incident');
  };

  const handleEditIncident = (id) => {
    navigate(`/edit-incident/${id}`);
  };

  if (loading) {
    return <p className="text-center mt-6">Loading incidents...</p>;
  }

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="ml-64 p-8 w-full pt-20">
        <div className="bg-white p-6 rounded-lg shadow-soft border border-muted">
          <h1 className="text-2xl font-bold mb-4 text-primary">Incident List</h1>
          <Button
            className="mb-3 bg-accent text-white"
            onClick={handleAddIncident}
          >
            Add Incident
          </Button>
          <table className="w-full bg-background rounded-md">
            <thead>
              <tr className="bg-primary text-white text-sm">
                <th className="py-2 px-3 text-left">Date</th>
                <th className="py-2 px-3 text-left">Student Name</th>
                <th className="py-2 px-3 text-left">Type</th>
                <th className="py-2 px-3 text-left">Details</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.id} className="hover:bg-gray-50 border-b last:border-none">
                  <td className="py-2 px-3 text-sm">{incident.date}</td>
                  <td className="py-2 px-3 text-sm">{incident.studentName}</td>
                  <td className="py-2 px-3 text-sm">{incident.type}</td>
                  <td className="py-2 px-3 text-sm">{incident.details}</td>
                  <td className="py-2 px-3 text-sm">
                    <Button
                      className="bg-primary hover:bg-primary-dark mr-1"
                      onClick={() => handleEditIncident(incident.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      className="bg-danger hover:bg-red-700"
                      onClick={() => {/* Add delete logic here */}}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncidentList;
