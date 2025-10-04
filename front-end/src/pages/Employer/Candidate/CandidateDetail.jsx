import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const CandidateDetail = () => {
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
          <div className="flex flex-wrap gap-2 p-4">
            <Link to="/candidates" className="text-base font-medium text-muted-foreground hover:text-primary">
              Candidates
            </Link>
            <span className="text-base font-medium text-muted-foreground">/</span>
            <span className="text-base font-medium text-foreground">Candidate Details</span>
          </div>
          <div className="flex p-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-4">
                <div
                  className="aspect-square h-32 w-32 min-h-32 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop")`,
                  }}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[22px] font-bold leading-tight tracking-tight text-foreground">
                    Selamawit Abebe
                  </p>
                  <p className="text-base font-normal text-muted-foreground">Software Engineering Intern</p>
                  <p className="text-base font-normal text-muted-foreground">Addis Ababa University</p>
                </div>
              </div>
              <button className="flex h-10 w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-muted px-4 text-sm font-bold leading-normal tracking-wide text-foreground md:w-auto">
                <span className="truncate">Add to Shortlist</span>
              </button>
            </div>
          </div>
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-tight text-foreground">
            Cover Letter
          </h2>
          <p className="px-4 pb-3 pt-1 text-base font-normal leading-normal text-foreground">
            Dear Hiring Manager, I am writing to express my interest in the Software Engineering Intern position at
            your company. As a recent graduate from Addis Ababa University with a degree in Computer Science, I have a
            strong foundation in software development principles and a passion for creating innovative solutions. During
            my studies, I gained experience in various programming languages, including Python, Java, and C++, and
            worked on several projects that honed my skills in software design, testing, and debugging. I am
            particularly interested in contributing to projects that involve machine learning and data analysis, as
            these are areas where I believe my skills can be most valuable. I am eager to learn from experienced
            professionals and contribute to a dynamic team. Thank you for considering my application. I look forward to
            the opportunity to discuss my qualifications further. Sincerely, Selamawit Abebe
          </p>
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-tight text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-3 p-3 pr-4">
            {["Python", "Java", "C++", "Machine Learning", "Data Analysis"].map((skill) => (
              <div key={skill} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-muted px-4">
                <p className="text-sm font-medium text-foreground">{skill}</p>
              </div>
            ))}
          </div>
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-tight text-foreground">
            Projects
          </h2>
          <div className="flex gap-4 bg-card px-4 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium text-foreground">Student Project Management System</p>
              <p className="text-sm font-normal text-muted-foreground">React, Node.js, MongoDB</p>
              <p className="text-sm font-normal text-muted-foreground">
                Developed a web application for managing student projects using React and Node.js.
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-card px-4 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium text-foreground">Student Performance Prediction Model</p>
              <p className="text-sm font-normal text-muted-foreground">Python, Scikit-learn, Pandas</p>
              <p className="text-sm font-normal text-muted-foreground">
                Created a machine learning model for predicting student performance based on academic data.
              </p>
            </div>
          </div>
          <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-tight text-foreground">
            Experience
          </h2>
          <div className="flex gap-4 bg-card px-4 py-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4a2 2 0 012-2h4a2 2 0 012 2v2m-8 0h8" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-base font-medium text-foreground">Software Development Intern</p>
              <p className="text-sm font-normal text-muted-foreground">Addis Ababa, Ethiopia | June 2022 - August 2022</p>
              <p className="text-sm font-normal text-muted-foreground">
                Assisted in the development of a mobile application for a local startup.
              </p>
            </div>
          </div>
          <div className="flex justify-stretch">
            <div className="flex flex-1 flex-wrap justify-end gap-3 px-4 py-3">
              <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-muted px-4 text-sm font-bold leading-normal tracking-wide text-foreground">
                <span className="truncate">Reject</span>
              </button>
              <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-wide text-primary-foreground">
                <span className="truncate">Add to Shortlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
