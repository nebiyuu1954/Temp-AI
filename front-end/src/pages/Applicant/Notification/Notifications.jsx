import React from 'react';
import { Header } from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { useSidebar } from '../../../context/SidebarContext';
import { useTranslation } from 'react-i18next';

const applicantNotifications = [
  {
    id: 1,
    icon: 'File',
    message: 'Your application for Software Engineering Internship at Tech Solutions has been received.',
    time: '2d ago',
  },
  {
    id: 2,
    icon: 'Briefcase',
    message: 'New internship opportunity: Data Science Internship at Data Insights Co.',
    time: '3d ago',
  },
  {
    id: 3,
    icon: 'Bell',
    message: 'Reminder: Complete your profile to increase your chances of getting matched with internships.',
    time: '1w ago',
  },
  {
    id: 4,
    icon: 'Star',
    message: 'Congratulations! You\'ve been shortlisted for the interview at Innovate Labs.',
    time: '2w ago',
  },
  {
    id: 5,
    icon: 'File',
    message: 'Update: Your application for UX/UI Design Internship at Creative Minds Inc. is under review.',
    time: '3w ago',
  },
];

const iconPaths = {
  File: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"></path>
    </svg>
  ),
  Briefcase: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
    </svg>
  ),
  Bell: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
    </svg>
  ),
  Star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
    </svg>
  ),
};

const Notifications = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Header />
      <div className="gap-1 px-6 flex flex-1 justify-center py-5 relative">
        <button onClick={toggleSidebar} className="absolute left-4 top-0 p-2 text-[#0c141d] hover:bg-gray-100 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {isSidebarOpen && <Sidebar />}
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">{t('sidebar.notifications')}</p>
          </div>
          {applicantNotifications.map(({ id, icon, message, time }) => (
            <div key={id} className="flex items-center gap-4 bg-[#f8f9fc] px-4 min-h-[72px] py-2">
              <div className="text-[#0d121c] flex items-center justify-center rounded-lg bg-[#e7ebf3] shrink-0 w-12 h-12">
                {iconPaths[icon]}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#0d121c] text-base font-medium leading-normal line-clamp-1">{message}</p>
                <p className="text-[#4b679b] text-sm font-normal leading-normal line-clamp-2">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
