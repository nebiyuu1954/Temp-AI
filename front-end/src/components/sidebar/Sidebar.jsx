import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation();
  const location = useLocation(); // Get current route

  const applicantMenuItems = [
    { label: t('sidebar.dashboard'), href: '/dashboard', icon: 'House' },
    { label: t('sidebar.recommendedInternships'), href: '/recommended', icon: 'Briefcase' },
    { label: t('sidebar.myApplications'), href: '/applications', icon: 'File' },
    { label: t('sidebar.resumeBuilder'), href: '/resume', icon: 'PencilSimple' },
    { label: t('sidebar.profile'), href: '/profile', icon: 'User' },
    { label: t('sidebar.notifications'), href: '/notifications', icon: 'Bell' },
  ];

  const employerMenuItems = [
    { label: t('sidebar.dashboard'), href: '/dashboard', icon: 'House' },
    { label: t('sidebar.jobs'), href: '/jobs', icon: 'Briefcase' },
    { label: t('sidebar.candidates'), href: '/candidates', icon: 'Users' },
    { label: t('sidebar.analytics'), href: '/analytics', icon: 'ChartBar' },
    { label: t('sidebar.notifications'), href: '/notifications', icon: 'Bell' },
  ];

  const menuItems = user?.role === 'APPLICANT' ? applicantMenuItems : employerMenuItems;

  const getIcon = (iconName) => {
    const icons = {
      House: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"/>
        </svg>
      ),
      Briefcase: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"/>
        </svg>
      ),
      File: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z"/>
        </svg>
      ),
      PencilSimple: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"/>
        </svg>
      ),
      User: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"/>
        </svg>
      ),
      Bell: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"/>
        </svg>
      ),
      Users: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M164.47,195.63a8,8,0,0,1-.47-5.46,88.56,88.56,0,0,0-4.73-18.85C150.72,161.54,140,149.21,140,136s10.72-25.54,19.27-35.32a88.56,88.56,0,0,0-4.73-18.85,8,8,0,0,1,15.46-4.47,104.29,104.29,0,0,1,5.47,21.83C187.28,110.46,196,122.79,196,136s-8.72,25.54-16.8,35.32A104.29,104.29,0,0,1,179.46,193.1,8,8,0,0,1,164.47,195.63ZM92.79,166.87C77.05,156.25,68,145.09,68,136s9-20.25,24.79-30.87a8,8,0,1,0-9.58-12.83C70.88,105.05,60,118.76,60,136s10.88,30.95,23.21,43.7a8,8,0,1,0,9.58-12.83ZM232,128A104.11,104.11,0,0,1,128,232,104.12,104.12,0,0,1,24,128,104.11,104.11,0,0,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88.1,88.1,0,0,0-88-88,88.1,88.1,0,0,0-88,88,88.1,88.1,0,0,0,88,88A88.1,88.1,0,0,0,216,128Z"/>
        </svg>
      ),
      ChartBar: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
          <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8v56H96a8,8,0,0,0-8,8v56H40a8,8,0,0,0-8,8v56H24a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM48,144H88v48H48Zm48-16V80h48v48Zm48-80v48h40V48Z"/>
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <div className="layout-content-container flex flex-col w-80 ml-2 mt-2">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f8f9fc] p-4">
        <div className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                location.pathname === item.href ? 'bg-[#e7ebf3]' : ''
                } hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200`}
            >
              <div className="text-[#0d121c]" data-icon={item.icon} data-size="24px" data-weight="regular">
                {getIcon(item.icon)}
              </div>
              <p className="text-[#0d121c] text-sm font-medium leading-normal">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
