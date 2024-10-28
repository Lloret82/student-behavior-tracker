// src/pages/IncidentList.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchIncidents, deleteIncident } from '../services/incidentService';
import Button from '../components/Button.jsx';

const IncidentList = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getIncidents = async () => {
      setLoading(true);
      const data = await fetchIncidents();
      setIncidents(data);
      setLoading(false);
    };

    getIncidents();
  }, []);

  const handleDelete = async (id) => {
    await deleteIncident(id);
    setIncidents(incidents.filter((incident) => incident.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-incident/${id}`);
  };

  if (loading) {
    return <p className="text-center mt-6">Loading incidents...</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-background mt-20">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-primary">Incident List</h1>
        
        <table className="w-full text-left table-auto border-collapse bg-background">
          <thead>
            <tr className="bg-primary text-white text-sm uppercase">
              <th className="py-3 px-4 border-b-2 border-gray-200">Date</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Type</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Details</th>
              <th className="py-3 px-4 border-b-2 border-gray-200">Recorded By</th>
              <th className="py-3 px-4 border-b-2 border-gray-200 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id} className="hover:bg-gray-100 text-sm">
                <td className="py-3 px-4 border-b border-gray-200">{incident.date || "N/A"}</td>
                <td className="py-3 px-4 border-b border-gray-200 capitalize">{incident.type}</td>
                <td className="py-3 px-4 border-b border-gray-200">{incident.details}</td>
                <td className="py-3 px-4 border-b border-gray-200">{incident.recordedBy}</td>
                <td className="py-3 px-4 border-b border-gray-200 text-center space-x-2">
                  <Button 
                    className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-1 rounded-md text-xs font-semibold"
                    onClick={() => handleEdit(incident.id)}
                  >
                    Edit
                  </Button>
                  <Button 
                    className="bg-red-500 text-white hover:bg-red-600 px-3 py-1 rounded-md text-xs font-semibold"
                    onClick={() => handleDelete(incident.id)}
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
  );
};

export default IncidentList;
