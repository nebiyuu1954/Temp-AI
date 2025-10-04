import React, { useContext } from 'react';
import { Header } from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { AuthContext } from '../../context/AuthContext';
import { useSidebar } from '../../context/SidebarContext';
import { useTranslation } from 'react-i18next';

const ApplicantLandingPage = () => {
  const { user } = useContext(AuthContext);
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { t } = useTranslation();

  const recommendedInternships = [
    {
      title: t('landing.softwareEngineeringIntern'),
      company: t('landing.techSolutionsInc'),
      location: 'Addis Ababa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIuUm4O39UtTjP6vZ0eUCa24-05D-NfMLK1kcg9PGlzW26hP9-1pu8Iy4DNSSxGAKKPIVlApkbW_IeNHFNOxINRJr5Ij7a_wOGDFVeDNKChwUC1_YgakeTG5xGyj_QH3e7WtA65d4G5zVw0kIZArc4dtx_W1oknKZGHw6NPhMHTjlYlAXylAaivnwhmD0l5LLZWZvpxmA5ehiOMj2AqqDGmcaBpALehkuFKr67x4Tmk65_bAjk7J2Zu7y198jaWT3A3yQdHCfYFHU'
    },
    {
      title: t('landing.dataAnalystIntern'),
      company: t('landing.dataInsightsLtd'),
      location: 'Addis Ababa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPfpeIMl6bigcudfqhH4vzx7a9vHi5ouULs95XX7aWYCo4AtK9PHtlbyLDkrXzDkQPjqitVIOcgzfIa3JLMTRn7agvJtBzO6jJVtLjD7KZtOc5_wOKjsvxHxvs0CCim0nNbD-xKetneddOpgPsETJ6-3e8vHFLfeSLqaPYhqc0buJ_n5rOrYqcZbxJH_gP0cXW_m2UFrXkKWSGzYM59KV8cQjcMVnw1qyxAUay-cbjzZ80-kWAvOgZOyfTnc-oKXRHNoLL3FSGNY0'
    },
    {
      title: t('landing.uiUxDesignIntern'),
      company: t('landing.designInnovatorsCo'),
      location: 'Addis Ababa',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAWypoy6T4oUqmobzs53_qOJxiXfdny5locxDFoV-ynBS_OIb4CHQE80wKOh25VffLzdfXlkzio9sYtY4LVGMKPj5oLLZ7-P--_FAooHZT7qfuTqR-MCcZACwQuw-J1LGbfnu8Fw6Q7jqmgz4KhNMA2BNPiRep30eliEsfl-a862EDKLOIfU07KldjlD1TEXvDc1FJd415HSEObPlZ2nfl_RZ9BTNK6A2VcJT1V_d19n8u9MtdcwFTcQW_XokzdHPSqGMTsGtV2_c'
    }
  ];

  const recentApplications = [
    {
      jobTitle: t('landing.softwareEngineeringIntern'),
      company: t('landing.techSolutionsInc'),
      date: 'July 15, 2024',
      status: 'Applied'
    },
    {
      jobTitle: t('landing.dataAnalystIntern'),
      company: t('landing.dataInsightsLtd'),
      date: 'July 10, 2024',
      status: 'Interviewing'
    },
    {
      jobTitle: t('landing.uiUxDesignIntern'),
      company: t('landing.designInnovatorsCo'),
      date: 'July 5, 2024',
      status: 'Rejected'
    }
  ];

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
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
              {t('welcome')}, {user?.name || 'User'}
            </p>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            {t('sidebar.recommendedInternships')}
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 gap-3">
              {recommendedInternships.map((internship, index) => (
                <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: `url("${internship.image}")` }}
                  ></div>
                  <div>
                    <p className="text-[#0d121c] text-base font-medium leading-normal">{internship.title}</p>
                    <p className="text-[#4b679b] text-sm font-normal leading-normal">{internship.company} | {internship.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-[#0d121c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            {t('sidebar.myApplications')}
          </h2>
          <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc]">
              <table className="flex-1">
                <thead>
                  <tr className="bg-[#f8f9fc]">
                    <th className="px-4 py-3 text-left text-[#0d121c] w-[400px] text-sm font-medium leading-normal">
                      {t('sidebar.jobs')}
                    </th>
                    <th className="px-4 py-3 text-left text-[#4b679b] w-[400px] text-sm font-medium leading-normal">
                      {t('sidebar.candidates')}
                    </th>
                    <th className="px-4 py-3 text-left text-[#4b679b] w-[400px] text-sm font-medium leading-normal">
                      {t('landing.date')}
                    </th>
                    <th className="px-4 py-3 text-left text-[#4b679b] w-60 text-sm font-medium leading-normal">
                      {t('landing.status')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentApplications.map((application, index) => (
                    <tr key={index} className="border-t border-t-[#cfd8e8]">
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#0d121c] text-sm font-normal leading-normal">
                        {application.jobTitle}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">
                        {application.company}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[400px] text-[#4b679b] text-sm font-normal leading-normal">
                        {application.date}
                      </td>
                      <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium leading-normal w-full"
                        >
                          <span className="truncate">{application.status}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <style>
              {`
                @container(max-width:120px){.table-column-120{display: none;}}
                @container(max-width:240px){.table-column-240{display: none;}}
                @container(max-width:360px){.table-column-360{display: none;}}
                @container(max-width:480px){.table-column-480{display: none;}}
              `}
            </style>
          </div>
          <div className="flex justify-stretch">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('sidebar.resumeBuilder')}</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('sidebar.profile')}</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('sidebar.notifications')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <p className="text-[#4b679b] text-base font-normal leading-normal">© 2024 InternLink. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default ApplicantLandingPage;
