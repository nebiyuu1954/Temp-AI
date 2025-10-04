import React from "react";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const jobPostings = [
  {
    id: 1,
    title: "Software Engineer Intern",
    applicants: 25,
    posted: "2 weeks ago",
    shortlisted: 5,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    applicants: 18,
    posted: "3 weeks ago",
    shortlisted: 3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Web Developer Intern",
    applicants: 32,
    posted: "1 week ago",
    shortlisted: 7,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Mobile Developer Intern",
    applicants: 20,
    posted: "4 weeks ago",
    shortlisted: 4,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Machine Learning Intern",
    applicants: 15,
    posted: "2 weeks ago",
    shortlisted: 2,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    title: "UI/UX Designer Intern",
    applicants: 28,
    posted: "1 week ago",
    shortlisted: 6,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
  },
];

const CandidateManagement = () => {
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
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[32px] font-bold leading-tight tracking-tight text-foreground">
                Candidate Management
              </p>
              <p className="text-sm font-normal text-muted-foreground">
                Manage candidates who have applied for your job postings.
              </p>
            </div>
          </div>
          <div className="px-4 py-3">
            <label className="flex h-12 w-full min-w-40 flex-col">
              <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                <div className="flex items-center justify-center rounded-l-lg border-r-0 bg-muted pl-4 text-muted-foreground">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  placeholder="Search by job posting name"
                  className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-muted pl-2 text-base font-normal leading-normal text-foreground placeholder:text-muted-foreground focus:border-none focus:outline-0 focus:ring-0"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-muted pl-4 pr-2">
              <p className="text-sm font-medium text-foreground">Job Posting</p>
              <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-muted pl-4 pr-2">
              <p className="text-sm font-medium text-foreground">Status</p>
              <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="flex flex-col gap-3 pb-3">
                <div
                  className="aspect-square w-full rounded-lg bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${job.image}")` }}
                />
                <div>
                  <p className="text-base font-medium text-foreground">{job.title}</p>
                  <p className="text-sm font-normal text-muted-foreground">Total Applicants: {job.applicants}</p>
                  <p className="text-sm font-normal text-muted-foreground">
                    Posted: {job.posted} | Shortlisted: {job.shortlisted}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateManagement;
