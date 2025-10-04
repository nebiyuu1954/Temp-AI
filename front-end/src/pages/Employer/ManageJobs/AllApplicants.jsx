import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const applicants = [
  {
    id: 1,
    name: "Abebe Kebede",
    role: "Software Engineer",
    university: "Addis Ababa University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Selamawit Tesfaye",
    role: "Software Engineer",
    university: "Jimma University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Tsegaye Mekonnen",
    role: "Software Engineer",
    university: "Bahir Dar University",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Mulugeta Haile",
    role: "Software Engineer",
    university: "Mekelle University",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Tigist Alemayehu",
    role: "Software Engineer",
    university: "Adama Science and Technology University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Yared Tadesse",
    role: "Software Engineer",
    university: "Hawassa University",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const AllApplicants = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

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
            <p className="min-w-72 text-[32px] font-bold leading-tight tracking-light text-[#0d121c]">
              Applicants for Software Engineer Internship
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {applicants.map((applicant) => (
              <Link key={applicant.id} to={`/applicant/${applicant.id}`} className="flex flex-col gap-3 pb-3">
                <div
                  className="aspect-square w-full rounded-lg bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${applicant.image}")` }}
                />
                <div>
                  <p className="text-base font-medium leading-normal text-[#0d121c]">{applicant.name}</p>
                  <p className="text-sm font-normal leading-normal text-[#4b679b]">{applicant.role}</p>
                  <p className="text-sm font-normal leading-normal text-[#4b679b]">{applicant.university}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center p-4">
            <a href="#" className="flex size-10 items-center justify-center">
              <svg className="h-[18px] w-[18px] text-[#0d121c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full bg-[#e7ebf3] text-sm font-bold leading-normal tracking-[0.015em] text-[#0d121c]"
              href="#"
            >
              1
            </a>
            <a className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-[#0d121c]" href="#">
              2
            </a>
            <a className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-[#0d121c]" href="#">
              3
            </a>
            <span className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-[#0d121c]">
              ...
            </span>
            <a className="flex size-10 items-center justify-center rounded-full text-sm font-normal leading-normal text-[#0d121c]" href="#">
              10
            </a>
            <a href="#" className="flex size-10 items-center justify-center">
              <svg className="h-[18px] w-[18px] text-[#0d121c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApplicants;
