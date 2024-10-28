// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { fetchIncidents } from '../services/incidentService.js';
import { fetchStudents } from '../services/studentService.js';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDashboardData = async () => {
      setLoading(true);
      const incidentsData = await fetchIncidents();
      const studentsData = await fetchStudents();
      setIncidents(incidentsData);
      setStudents(studentsData);
      setLoading(false);
    };

    getDashboardData();
  }, []);

  const totalIncidents = incidents.length;
  const totalStudents = students.length;

  const calculateIncidentPercentage = () => {
    const schoolCapacity = 500;
    return ((totalIncidents / schoolCapacity) * 100).toFixed(2);
  };

  // Count incident types for the chart
  const behaviorTypeCounts = () => {
    const counts = { positive: 0, negative: 0 };
    incidents.forEach((incident) => {
      if (incident.type === "Positive Recognition") {
        counts.positive += 1;
      } else if (incident.type === "Behavior Incident") {
        counts.negative += 1;
      }
    });
    return counts;
  };

  const behaviorData = behaviorTypeCounts();

  // Prepare data for the Pie chart
  const pieData = {
    labels: ['Positive Recognition', 'Behavior Incident'],
    datasets: [
      {
        data: [behaviorData.positive, behaviorData.negative],
        backgroundColor: ['#34D399', '#EF4444'], // Green and Red
        hoverBackgroundColor: ['#10B981', '#DC2626'], 
      },
    ],
  };

  // Prepare data for the Bar chart
  const barData = {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        label: 'Number of Incidents',
        data: [behaviorData.positive, behaviorData.negative],
        backgroundColor: ['#34D399', '#EF4444'],
        borderColor: ['#10B981', '#DC2626'],
        borderWidth: 1,
      },
    ],
  };

  const lastIncident = incidents.length > 0 ? incidents[incidents.length - 1] : null;

  if (loading) {
    return <p className="text-center mt-6">Loading dashboard...</p>;
  }

  return (
    <div className="container mx-auto p-20 bg-background mt-20">
      <h1 className="text-2xl font-bold mb-6 text-primary">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-muted mb-1">Total Incidents</h2>
          <p className="text-3xl font-bold text-primary">{totalIncidents}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-muted mb-1">Incident Percentage</h2>
          <p className="text-3xl font-bold text-primary">{calculateIncidentPercentage()}%</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-muted mb-1">Total Students</h2>
          <p className="text-3xl font-bold text-primary">{totalStudents}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-sm font-medium text-muted mb-1">Most Common Behavior</h2>
          <p className="text-3xl font-bold text-primary">
            {behaviorData.positive >= behaviorData.negative ? "Positive" : "Negative"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-primary mb-4">Incident Behavior Breakdown</h2>
          <div className="w-40 h-40 mx-auto">
            <Pie data={pieData} />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-primary mb-4">Incidents by Type</h2>
          <div className="w-48 h-32 mx-auto">
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
