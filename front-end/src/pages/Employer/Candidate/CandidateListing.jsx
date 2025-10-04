import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const candidates = [
  {
    id: 1,
    name: "Abebe Kebede",
    university: "Addis Ababa University",
    skills: "Python, Java, Data Structures",
    status: "Shortlisted",
  },
  {
    id: 2,
    name: "Selamawit Tesfaye",
    university: "Mekelle University",
    skills: "JavaScript, React, UI/UX Design",
    status: "Shortlisted",
  },
  {
    id: 3,
    name: "Tigist Alemayehu",
    university: "Bahir Dar University",
    skills: "C++, Algorithms, Problem Solving",
    status: "Shortlisted",
  },
];

const CandidateListing = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [activeTab, setActiveTab] = useState("shortlisted");

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
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Software Engineer Intern
            </p>
          </div>
          <div className="pb-3">
            <div className="flex gap-8 border-b border-border px-4">
              <button
                onClick={() => setActiveTab("shortlisted")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "shortlisted"
                    ? "border-b-primary text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-wide">Shortlisted</p>
              </button>
              <button
                onClick={() => setActiveTab("interviewed")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "interviewed"
                    ? "border-b-primary text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-wide">Interviewed</p>
              </button>
              <button
                onClick={() => setActiveTab("accepted")}
                className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
                  activeTab === "accepted"
                    ? "border-b-primary text-foreground"
                    : "border-b-transparent text-muted-foreground"
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-wide">Accepted</p>
              </button>
            </div>
          </div>
          <div className="px-4 py-3">
            <div className="overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f8f9fc]">
                    <th className="px-4 py-3 text-left text-[#0d121c] text-sm font-medium leading-normal">Name</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] text-sm font-medium leading-normal">University</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] text-sm font-medium leading-normal">Skills</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] text-sm font-medium leading-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="border-t border-t-[#cfd8e8]">
                      <td className="h-[72px] px-4 py-2 text-[#0d121c] text-sm font-normal leading-normal">
                        <Link to={`/candidates/${candidate.id}`} className="hover:text-blue-600">
                          {candidate.name}
                        </Link>
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#4b679b] text-sm font-normal leading-normal">
                        {candidate.university}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-[#4b679b] text-sm font-normal leading-normal">
                        {candidate.skills}
                      </td>
                      <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal">
                        <button className="flex h-8 w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] text-[#0d121c] text-sm font-medium leading-normal">
                          <span className="truncate">{candidate.status}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end px-4 py-3">
            <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] text-[#0d121c] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Remove to Candidate Pool</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateListing;
