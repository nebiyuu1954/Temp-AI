import React from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useSidebar } from "@/context/SidebarContext";

const ApplicantDetail = () => {
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
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap gap-2 p-4">
              <Link to="/all-applicants" className="text-base font-medium leading-normal text-[#4b679b]">
                Applicants
              </Link>
              <span className="text-base font-medium leading-normal text-[#4b679b]">/</span>
              <span className="text-base font-medium leading-normal text-[#0d121c]">Applicant Details</span>
            </div>
            <div className="p-4">
              <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                  <div
                    className="aspect-square min-h-32 w-32 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop")`,
                    }}
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d121c]">
                      Selamawit Abebe
                    </p>
                    <p className="text-base font-normal leading-normal text-[#4b679b]">Software Engineering Intern</p>
                    <p className="text-base font-normal leading-normal text-[#4b679b]">Addis Ababa University</p>
                  </div>
                </div>
                <button className="flex h-10 w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#0d121c] md:w-auto">
                  <span className="truncate">Add to Shortlist</span>
                </button>
              </div>
            </div>
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d121c]">
              Cover Letter
            </h2>
            <p className="px-4 pb-3 pt-1 text-base font-normal leading-normal text-[#0d121c]">
              Dear Hiring Manager, I am writing to express my interest in the Software Engineering Intern position at
              your company. As a recent graduate from Addis Ababa University with a degree in Computer Science, I have a
              strong foundation in software development principles and a passion for creating innovative solutions.
              During my studies, I gained experience in various programming languages, including Python, Java, and C++,
              and worked on several projects that honed my skills in software design, testing, and debugging. I am
              particularly interested in contributing to projects that involve machine learning and data analysis, as
              these are areas where I believe my skills can be most valuable. I am eager to learn from experienced
              professionals and contribute to a dynamic team. Thank you for considering my application. I look forward
              to the opportunity to discuss my qualifications further. Sincerely, Selamawit Abebe
            </p>
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d121c]">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3 p-3 pr-4">
              {["Python", "Java", "C++", "Machine Learning", "Data Analysis"].map((skill) => (
                <div key={skill} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7ebf3] px-4">
                  <p className="text-sm font-medium leading-normal text-[#0d121c]">{skill}</p>
                </div>
              ))}
            </div>
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d121c]">
              Projects
            </h2>
            <div className="flex gap-4 bg-[#f8f9fc] px-4 py-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#e7ebf3] text-[#0d121c]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-base font-medium leading-normal text-[#0d121c]">Student Project Management System</p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">React, Node.js, MongoDB</p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">
                  Developed a web application for managing student projects using React and Node.js.
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#f8f9fc] px-4 py-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#e7ebf3] text-[#0d121c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152ZM80,164a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-base font-medium leading-normal text-[#0d121c]">
                  Student Performance Prediction Model
                </p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">Python, Scikit-learn, Pandas</p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">
                  Created a machine learning model for predicting student performance based on academic data.
                </p>
              </div>
            </div>
            <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d121c]">
              Experience
            </h2>
            <div className="flex gap-4 bg-[#f8f9fc] px-4 py-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#e7ebf3] text-[#0d121c]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-base font-medium leading-normal text-[#0d121c]">Software Development Intern</p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">
                  Addis Ababa, Ethiopia | June 2022 - August 2022
                </p>
                <p className="text-sm font-normal leading-normal text-[#4b679b]">
                  Assisted in the development of a mobile application for a local startup.
                </p>
              </div>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 flex-wrap justify-end gap-3 px-4 py-3">
                <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7ebf3] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#0d121c]">
                  <span className="truncate">Reject</span>
                </button>
                <button className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#0f5ef0] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#f8f9fc]">
                  <span className="truncate">Add to Shortlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
