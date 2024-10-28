import initialIncidents from '../data/incidents.json';

export const fetchIncidents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Get incidents from local storage, if any
      const storedIncidents = JSON.parse(localStorage.getItem('incidents')) || [];
      
      // Combine initial incidents from JSON with those from local storage
      const combinedIncidents = [...initialIncidents, ...storedIncidents];
      
      // Ensure there are no duplicates by filtering out incidents with the same ID
      const uniqueIncidents = Array.from(new Map(combinedIncidents.map(item => [item.id, item])).values());

      resolve(uniqueIncidents);
    }, 300);
  });
};
