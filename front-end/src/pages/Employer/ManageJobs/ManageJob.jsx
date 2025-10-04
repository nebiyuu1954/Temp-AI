import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const jobs = [
  {
    id: 1,
    title: "Software Engineer Intern",
    status: "Active",
    applicants: 25,
    deadline: "2024-08-15",
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    status: "Closed",
    applicants: 18,
    deadline: "2024-07-30",
  },
  {
    id: 3,
    title: "UX/UI Designer Intern",
    status: "Active",
    applicants: 32,
    deadline: "2024-08-01",
  },
  {
    id: 4,
    title: "Mobile App Developer Intern",
    status: "Active",
    applicants: 20,
    deadline: "2024-08-20",
  },
  {
    id: 5,
    title: "QA Tester Intern",
    status: "Closed",
    applicants: 15,
    deadline: "2024-07-25",
  },
];

const ManageJobs = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="gap-1 px-6 flex flex-1 justify-center py-5 relative">
        <button
          onClick={toggleSidebar}
          className="absolute left-4 top-0 p-2 text-gray-800 hover:bg-gray-200 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isSidebarOpen && <Sidebar />}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="min-w-72 text-[32px] font-bold leading-tight tracking-light text-[#0d121c]">Manage Jobs</p>
              <button className="flex h-8 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] px-4 text-sm font-medium leading-normal text-[#0d121c]">
                <span className="truncate">Create Job</span>
              </button>
            </div>
            <div className="px-4 py-3">
              <label className="flex h-12 w-full min-w-40 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div className="flex items-center justify-center rounded-l-lg border-none border-r-0 bg-[#e7ebf3] pl-4 text-[#4b679b]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search jobs"
                    className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#e7ebf3] pl-2 text-base font-normal leading-normal text-[#0d121c] placeholder:text-[#4b679b] focus:border-none focus:outline-0 focus:ring-0"
                  />
                </div>
              </label>
            </div>
            <div className="pb-3">
              <div className="flex gap-8 border-b border-[#cfd8e8] px-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "all"
                      ? "border-b-[#0f5ef0] text-[#0d121c]"
                      : "border-b-transparent text-[#4b679b]"
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">All</p>
                </button>
                <button
                  onClick={() => setActiveTab("active")}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "active"
                      ? "border-b-[#0f5ef0] text-[#0d121c]"
                      : "border-b-transparent text-[#4b679b]"
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Active</p>
                </button>
                <button
                  onClick={() => setActiveTab("closed")}
                  className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                    activeTab === "closed"
                      ? "border-b-[#0f5ef0] text-[#0d121c]"
                      : "border-b-transparent text-[#4b679b]"
                  }`}
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">Closed</p>
                </button>
              </div>
            </div>
            <div className="px-4 py-3">
              <div className="overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc]">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f8f9fc]">
                      <th className="px-4 py-3 text-left text-sm font-medium leading-normal text-[#0d121c]">Job Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium leading-normal text-[#0d121c]">Status</th>
                      <th className="px-4 py-3 text-left text-sm font-medium leading-normal text-[#0d121c]">Applicants</th>
                      <th className="px-4 py-3 text-left text-sm font-medium leading-normal text-[#0d121c]">Deadline</th>
                      <th className="px-4 py-3 text-left text-sm font-medium leading-normal text-[#4b679b]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job) => (
                      <tr key={job.id} className="border-t border-t-[#cfd8e8]">
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-[#0d121c]">
                          {job.title}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                          <button className="flex h-8 w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] px-4 text-sm font-medium leading-normal text-[#0d121c]">
                            <span className="truncate">{job.status}</span>
                          </button>
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-[#4b679b]">
                          {job.applicants}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal text-[#4b679b]">
                          {job.deadline}
                        </td>
                        <td className="h-[72px] px-4 py-2 text-sm font-bold leading-normal tracking-[0.015em] text-[#4b679b]">
                          View
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;
