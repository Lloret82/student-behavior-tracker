// src/services/incidentService.js

// Function to fetch incidents from localStorage
export const fetchIncidents = () => {
    const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    return incidents;
  };
  
  // Function to save a new incident to localStorage
  export const saveIncident = (incident) => {
    const incidents = fetchIncidents();
    const newIncident = { ...incident, id: Date.now() }; // Add unique ID based on timestamp
    incidents.push(newIncident);
    localStorage.setItem('incidents', JSON.stringify(incidents));
    return newIncident;
  };
  
  // Function to update an existing incident
  export const updateIncident = (updatedIncident) => {
    const incidents = fetchIncidents();
    const updatedIncidents = incidents.map((incident) =>
      incident.id === updatedIncident.id ? updatedIncident : incident
    );
    localStorage.setItem('incidents', JSON.stringify(updatedIncidents));
  };
  
  // Function to delete an incident
  export const deleteIncident = (id) => {
    const incidents = fetchIncidents();
    const updatedIncidents = incidents.filter((incident) => incident.id !== id);
    localStorage.setItem('incidents', JSON.stringify(updatedIncidents));
  };
  