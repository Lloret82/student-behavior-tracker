import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';

const EditIncident = () => {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch incidents from local storage
    const storedIncidents = JSON.parse(localStorage.getItem('incidents')) || [];
    const existingIncident = storedIncidents.find(inc => inc.id === parseInt(id));
    if (existingIncident) {
      setIncident(existingIncident);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIncident({ ...incident, [name]: value });
  };

  const handleSave = () => {
    // Update incident in local storage
    const storedIncidents = JSON.parse(localStorage.getItem('incidents')) || [];
    const updatedIncidents = storedIncidents.map(inc => 
      inc.id === parseInt(id) ? incident : inc
    );
    localStorage.setItem('incidents', JSON.stringify(updatedIncidents));
    navigate('/incidents');
  };

  if (!incident) {
    return <p>Loading incident...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Incident</h1>
      <div className="bg-gray-100 p-4 rounded">
        <select
          name="type"
          className="w-full mb-4 p-2"
          value={incident.type}
          onChange={handleInputChange}
        >
          <option value="Behavior Incident">Behavior Incident</option>
          <option value="Positive Recognition">Positive Recognition</option>
          <option value="Intervention">Intervention</option>
        </select>
        <textarea
          name="details"
          className="w-full p-2 mb-4"
          placeholder="Details"
          value={incident.details}
          onChange={handleInputChange}
        />
        <input
          name="actionTaken"
          className="w-full p-2 mb-4"
          type="text"
          placeholder="Action Taken"
          value={incident.actionTaken}
          onChange={handleInputChange}
        />
        <Button className="w-full" onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
};

export default EditIncident;
