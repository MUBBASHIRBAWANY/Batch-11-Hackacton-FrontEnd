import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';

// Registering ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  RadialLinearScale
);

const ChartContainer = () => {
  // Data for Bar Chart
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12000, 15000, 13000, 17000, 19000],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for Line Chart
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [30, 50, 70, 90, 120],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        data: [300, 450, 200],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  // Data for Doughnut Chart
  const doughnutData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        data: [600, 300, 100],
        backgroundColor: ['#4BC0C0', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#4BC0C0', '#FF6384', '#FFCE56'],
      },
    ],
  };

  // Data for Radar Chart
  const radarData = {
    labels: ['Speed', 'Reliability', 'Security', 'Scalability', 'Ease of Use'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [4, 5, 4, 3, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  // Common Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="flex flex-wrap justify-between gap-8 p-6">
      {/* Bar Chart */}
      <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Monthly Revenue (Bar Chart)</h3>
        <Bar data={barData} options={options} />
      </div>

      {/* Line Chart */}
      <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Website Traffic (Line Chart)</h3>
        <Line data={lineData} options={options} />
      </div>

      {/* Pie Chart */}
      <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Product Distribution (Pie Chart)</h3>
        <Pie data={pieData} options={options} />
      </div>

      {/* Doughnut Chart */}
      <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Device Usage (Doughnut Chart)</h3>
        <Doughnut data={doughnutData} options={options} />
      </div>

      {/* Radar Chart */}
      <div className="w-full lg:w-1/2 xl:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Performance Metrics (Radar Chart)</h3>
        <Radar data={radarData} options={options} />
      </div>
    </div>
  );
};

export default ChartContainer;
