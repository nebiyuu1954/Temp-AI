import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Header } from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useSidebar } from '../../../context/SidebarContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Analytics = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  // Sample data for Applications Over Time
  const applicationsOverTimeData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Applications',
        data: [21, 41, 93, 33],
        borderColor: '#4b679b',
        backgroundColor: 'rgba(231, 235, 243, 0.5)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const applicationsOverTimeOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for Application Status
  const applicationStatusData = {
    labels: ['Applied', 'Reviewed', 'Interviewed', 'Offered', 'Hired'],
    datasets: [
      {
        label: 'Count',
        data: [30, 40, 80, 50, 40],
        backgroundColor: '#e7ebf3',
        borderColor: '#4b679b',
        borderWidth: 2,
      },
    ],
  };

  const applicationStatusOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for Candidate Skills
  const candidateSkillsData = {
    labels: ['Software Engineering', 'Data Science', 'UI/UX Design', 'Project Management', 'Digital Marketing'],
    datasets: [
      {
        label: 'Count',
        data: [30, 50, 70, 80, 50],
        backgroundColor: '#e7ebf3',
        borderColor: '#4b679b',
        borderWidth: 2,
        borderSkipped: false,
        borderRadius: 0,
        barThickness: 20,
      },
    ],
  };

  const candidateSkillsOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  // Sample data for Candidate Universities
  const candidateUniversitiesData = {
    labels: ['Addis Ababa University', 'Mekelle University', 'Bahir Dar University', 'Jimma University', 'Hawassa University'],
    datasets: [
      {
        label: 'Count',
        data: [100, 10, 40, 70, 50],
        backgroundColor: '#e7ebf3',
        borderColor: '#4b679b',
        borderWidth: 2,
        borderSkipped: false,
        borderRadius: 0,
        barThickness: 20,
      },
    ],
  };

  const candidateUniversitiesOptions = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="gap-1 px-6 flex flex-1 justify-center py-5 relative">
        <button onClick={toggleSidebar} className="absolute left-4 top-0 p-2 text-gray-800 hover:bg-gray-200 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isSidebarOpen && <Sidebar />}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">Analytics</p>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Job Postings</h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Applications Over Time</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">120</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Last 30 Days</p>
                <p className="text-[#07883b] text-base font-medium leading-normal">+15%</p>
              </div>
              <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                <Line data={applicationsOverTimeData} options={applicationsOverTimeOptions} />
              </div>
            </div>
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Application Status</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">45</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Current</p>
                <p className="text-[#e73908] text-base font-medium leading-normal">-5%</p>
              </div>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <Bar data={applicationStatusData} options={applicationStatusOptions} />
              </div>
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Candidate Pool</h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Candidate Skills</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">250</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Current</p>
                <p className="text-[#07883b] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <Bar data={candidateSkillsData} options={candidateSkillsOptions} />
              </div>
            </div>
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Candidate Universities</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">180</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Current</p>
                <p className="text-[#07883b] text-base font-medium leading-normal">+8%</p>
              </div>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <Bar data={candidateUniversitiesData} options={candidateUniversitiesOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
