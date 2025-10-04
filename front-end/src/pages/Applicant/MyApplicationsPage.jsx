import React, { useContext } from 'react';
import { Header } from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { AuthContext } from '../../context/AuthContext';
import { useSidebar } from '../../context/SidebarContext';
import { useTranslation } from 'react-i18next';

const MyApplications = () => {
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
        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="flex flex-wrap justify-between gap-3 p-4">
                <p class="text-[#0d121c] tracking-light text-2xl font-bold leading-tight min-w-[18rem]">My Applications</p>
            </div>

            <h2 class="text-[#0d121c] text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Applications</h2>
            <div class="px-4 py-3">
                <div class="flex overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc] w-full">
                <table class="flex-1 min-w-full table-auto">
                    <thead>
                    <tr class="bg-[#f8f9fc]">
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Job Title</th>
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Company</th>
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Application Date</th>
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Software Engineer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Innovate Solutions</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-07-15</td>
                        <td class="px-4 py-2">
                        <button class="flex items-center justify-center h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium rounded-lg w-full">
                            Applied
                        </button>
                        </td>
                    </tr>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Software Engineer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Innovate Solutions</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-07-15</td>
                        <td class="px-4 py-2">
                        <button class="flex items-center justify-center h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium rounded-lg w-full">
                            Applied
                        </button>
                        </td>
                    </tr>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Software Engineer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Innovate Solutions</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-07-15</td>
                        <td class="px-4 py-2">
                        <button class="flex items-center justify-center h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium rounded-lg w-full">
                            Applied
                        </button>
                        </td>
                    </tr>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Data Analyst Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Data Insights Co.</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-07-10</td>
                        <td class="px-4 py-2">
                        <button class="flex items-center justify-center h-8 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-medium rounded-lg w-full">
                            Under Review
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <h2 class="text-[#0d121c] text-xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5">Bookmarks</h2>
            <div class="px-4 py-3">
                <div class="flex overflow-hidden rounded-lg border border-[#cfd8e8] bg-[#f8f9fc] w-full">
                <table class="flex-1 min-w-full table-auto">
                    <thead>
                    <tr class="bg-[#f8f9fc]">
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Job Title</th>
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Company</th>
                        <th class="px-4 py-3 text-left text-[#0d121c] text-sm font-medium">Date Bookmarked</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Frontend Developer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Web Wizards Ltd.</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-08-01</td>
                    </tr>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Frontend Developer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Web Wizards Ltd.</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-08-01</td>
                    </tr>
                    <tr class="border-t border-[#cfd8e8]">
                        <td class="px-4 py-2 text-sm text-[#0d121c]">Frontend Developer Intern</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">Web Wizards Ltd.</td>
                        <td class="px-4 py-2 text-sm text-[#4b679b]">2024-08-01</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>

      </div>
      
    </div>
  );
};

export default MyApplications;
