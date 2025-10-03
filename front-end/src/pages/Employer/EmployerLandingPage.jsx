import React from 'react';
import { Header } from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { useSidebar } from '../../context/SidebarContext';

const EmployerLandingPage = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
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
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">Welcome back, Sarah</p>
          </div>
          <div className="flex justify-stretch">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0f5ef0] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Post a Job</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View All Candidates</span>
              </button>
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Active Job Postings</h2>
          <div className="px-4 py-3">
            <div className="flex overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc]">
              <table className="flex-1">
                <thead>
                  <tr className="bg-[#f8f9fc]">
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">Job Title</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">Applications</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-60 text-sm font-medium leading-normal">Status</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-60 text-[#4b679b] text-sm font-medium leading-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">Software Engineer Intern</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">25</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">Data Analyst Intern</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">18</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">UX/UI Designer Intern</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">12</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium leading-normal w-full">
                        <span className="truncate">Active</span>
                      </button>
                    </td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Candidates</h2>
          <div className="px-4 py-3">
            <div className="flex overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc]">
              <table className="flex-1">
                <thead>
                  <tr className="bg-[#f8f9fc]">
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">Name</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">Skills</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">Experience</th>
                    <th className="px-4 py-3 text-left text-[#0d121c] w-60 text-[#4b679b] text-sm font-medium leading-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">Abebe Kebede</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">Python, Java</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">1 year</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">Tigist Alemayehu</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">Data Analysis, SQL</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">2 years</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                  <tr className="border-t border-t-[#cfd8e8]">
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">Solomon Tesfaye</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">UI/UX Design, Figma</td>
                    <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">1 year</td>
                    <td className="h-[72px] px-4 py-2 w-60 text-[#4b679b] text-sm font-bold leading-normal tracking-[0.015em]">View</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Analytics Snapshot</h2>
          <div className="flex flex-wrap gap-4 px-4 py-6">
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Applications Received</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">150</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Last 30 Days</p>
                <p className="text-[#07883b] text-base font-medium leading-normal">+15%</p>
              </div>
              <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                <div className="border-[#4b679b] bg-[#e7ebf3] border-t-2 w-full" style={{ height: '10%' }}></div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 1</p>
                <div className="border-[#4b679b] bg-[#e7ebf3] border-t-2 w-full" style={{ height: '50%' }}></div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 2</p>
                <div className="border-[#4b679b] bg-[#e7ebf3] border-t-2 w-full" style={{ height: '100%' }}></div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 3</p>
                <div className="border-[#4b679b] bg-[#e7ebf3] border-t-2 w-full" style={{ height: '40%' }}></div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Week 4</p>
              </div>
            </div>
            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-lg border border-[#cfd8e8] p-6">
              <p className="text-[#0d121c] text-base font-medium leading-normal">Top Skills</p>
              <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight truncate">Python</p>
              <div className="flex gap-1">
                <p className="text-[#4b679b] text-base font-normal leading-normal">Last 30 Days</p>
                <p className="text-[#07883b] text-base font-medium leading-normal">+10%</p>
              </div>
              <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Python</p>
                <div className="h-full flex-1">
                  <div className="border-[#4b679b] bg-[#e7ebf3] border-r-2 h-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Java</p>
                <div className="h-full flex-1">
                  <div className="border-[#4b679b] bg-[#e7ebf3] border-r-2 h-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">SQL</p>
                <div className="h-full flex-1">
                  <div className="border-[#4b679b] bg-[#e7ebf3] border-r-2 h-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-[#4b679b] text-[13px] font-bold leading-normal tracking-[0.015em]">Figma</p>
                <div className="h-full flex-1">
                  <div className="border-[#4b679b] bg-[#e7ebf3] border-r-2 h-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Feedback</h2>
          <div className="flex flex-col gap-8 overflow-x-hidden bg-[#f8f9fc] p-4">
            <div className="flex flex-col gap-3 bg-[#f8f9fc]">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA6vSJi4JekNgr4b_SyLDmbQErhDWCdF2tTt5KxrRBF9r5H3Y6ClugwjDzymlqq-cG5rGyL2nZF5Cf_fzm0E26tdVas4hZMiOo6dHJSTwSUc905Xg2tHfTot7QmMgTjnsbz-LV6C2T__Ov3sZtiORV6Bp3x6my0Za_N-J209tRNmZgvKiNslDGSsG9znKj61qFkAKC2D00wHdghKZ2TxgvpqW1vcD4VuGiXBGFxv7-ANTpUY2odFCgGaWMrzEiqImsagkBo6ijavA")' }}></div>
                <div className="flex-1">
                  <p className="text-[#0d121c] text-base font-medium leading-normal">Abebe Kebede</p>
                  <p className="text-[#4b679b] text-sm font-normal leading-normal">2 weeks ago</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#0d121c] text-base font-normal leading-normal">
                The internship at your company was an incredible learning experience. I gained valuable skills and insights into the industry. The team was supportive and provided excellent mentorship.
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-[#f8f9fc]">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIZvMfMcq64xYV4pkTTCAlXbLYCEvynXNny2z0nkjkW_SZL3eedWwEWjbpMz0hfJRLFwMxttVPbYK2BL1bMDrpjkmffLfXT313IBCuPivXKMDtNiUXVTFKYGwccrvPUvcWPuMZ6c-5MlCVPKtODZthT77IdhOuRVKxhUEM6P1GKA7yvZthdofjOs5bPHLS_Wui9zdTIx9iQezD7nxygKrfmuOmDEK25yysMUhtVODLJusKIbf8uCvsG1XNhuYKjBRBA2exd_eQzKo")' }}></div>
                <div className="flex-1">
                  <p className="text-[#0d121c] text-base font-medium leading-normal">Tigist Alemayehu</p>
                  <p className="text-[#4b679b] text-sm font-normal leading-normal">1 month ago</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#0f5ef0]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                </div>
                <div className="text-[#acbbd7]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z" />
                  </svg>
                </div>
              </div>
              <p className="text-[#0d121c] text-base font-normal leading-normal">
                I enjoyed my internship and found the work challenging and rewarding. The company culture is positive, and I felt like a valued member of the team. I would recommend this internship to other students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerLandingPage;
