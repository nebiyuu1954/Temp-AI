import React, { useContext } from 'react';
import { Header } from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { AuthContext } from '../../../context/AuthContext';
import { useSidebar } from '../../../context/SidebarContext';
import { useTranslation } from 'react-i18next';

const ResumeBuilderPage = () => {
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
                <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight">
                    Resume Builder
                </p>
                <p className="text-[#4b679b] text-sm font-normal leading-normal">
                    Build a professional resume to showcase your skills and experience to potential employers.
                </p>
                </div>
            </div>

            <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Work Experience
            </h3>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                {/* Work Experience Item */}
                {[
                    {
                    title: 'Software Engineer',
                    company: 'Tech Solutions Inc.',
                    image:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuA9ATI7ItZUHobPqeZtZrqZNOBguMI01GY5U0T5nJAPOOGI9bf6xgCV95ItuYuT_AuuaUUrgan13u-NET9O7AiDo8Pww8uYbvxNll3iAyxUKKVqRsnNvAkBB0D2A2wYQmzLAj9xNtqME80jRIi3JcwRiMXO3Z8M3vN6bSrb8hMT5jmPeNkYq9WXIU19EP6Xt1P4m5NAlSMh8maCpAobz_1AtYhyxfXIObzwrXLA-U5_8alLLcDLFZOf3m3B4yB4-stugLGn3EZeUUE',
                    },
                    {
                    title: 'Software Engineer',
                    company: 'Tech Solutions Inc.',
                    image:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBddZhUX3D7R43XVt8Ev0UZdzmalnJVYvAuENr0JFiVr_mekvIupgSjTYZhEtOa5hCRsE1-00IgRa2jI7yzVtNVBWlBCgDbZTeeniNdgrHZRyuzaQpc0m3upPyjbBI6RlyKWENW-nZrtVZCo4-eAT6g7JleXZs9ftT8h-KpES5OegyJSapMJuBgGxGDA2rMrEEOfPqFEDXuef9wtc2uT1mqtZlAqREtJSuzqzOPzJ_s8U7sRVnCAyBYvpqyQvpi_AUiCz33q3RTfdM',
                    },
                ].map((item, index) => (
                    <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                        style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div>
                        <p className="text-[#0d121c] text-base font-medium leading-normal">{item.title}</p>
                        <p className="text-[#4b679b] text-sm font-normal leading-normal">{item.company}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Repeat similar structure for Projects, Internship, Extracurricular, References */}
            {/* Example for Projects */}
            <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Projects
            </h3>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                {[
                    {
                    title: 'E-commerce Platform',
                    tech: 'React, Node.js, PostgreSQL',
                    image:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuAbs1_51iSMqLRXh0z25rAiiiYFfF8aFy0YgLmbNPhtwodlJaYDbp0qwYEKFyM0-4VV6-AQWfttx30o2Uc0DN6c9Dra7d8uIqiwEDxAmkMw2ncV5Fzn3QWWDtcOrEtwyI-WPKUVOmi1sgUVQd1jhJTKHml5X6vGg7e6tWC6bogS8Md39I5GgcZiliLhvaO2CmZqEUgdNGaPFMVcXznQ4OXaqWsj-M6Uh5zx6jlc62akc-Wr4K0SK0V2Rp4sLK0mbBkbFo4djrtRbtE',
                    },
                    {
                    title: 'E-commerce Platform',
                    tech: 'React, Node.js, PostgreSQL',
                    image:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuAD7raIjofhe-NWkVhQOF_-RLDoI-sZrmxWpTEMXS2CC19DkAQHRRurV-y7yaoqW8cpcIRQV12_yO7KF9WyE1L6uYplPfBrwpKWp7OMBZfJuaYa2JnTbDTD2NpOxy-FGMJPVLyQuX942wt6ChXgGccpSLZDRofghddtktst8bYwVrqrjkgEsPVOqbX5UR-5wQqV85cKvUpdcmNKYvd40zElr4VlSZmjLTZtXGvps067E0SiscaMgf8BdI_7a7xyI5ddLMVOZQgbibo',
                    },
                ].map((item, index) => (
                    <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                        style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div>
                        <p className="text-[#0d121c] text-base font-medium leading-normal">{item.title}</p>
                        <p className="text-[#4b679b] text-sm font-normal leading-normal">{item.tech}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Employer Preview */}
            <h3 className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                Employer Preview
            </h3>
            <div className="p-4">
                <div className="flex flex-col items-stretch justify-start rounded-lg xl:flex-row xl:items-start shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-[#f8f9fc]">
                <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                    style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7YKbINf10mZ8xgajnI_KYRkU3yxe3xUuqQobP4I9lmi2uQLbptZmg2aLJj3EkANHz6dNauP3orTbQkJ2E8cFLSnNH1XLXa6upt188hgTI0zzuqYtnzpKnmN0BIF7Kn26dFFe7_cU2iuKQIVVe8o-Q8SybRjGgSVJPUS0UUuiRtowwtlsn2KU_yn2znEKx2IAngGh6VIYu1EAG_UuwcHuPJXe-fS0Y7yygWO5n-yH_BtFgLz1YmXO1rNaBufXDprV3GExG1G50DRY")`,
                    }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 xl:px-4 px-4">
                    <p className="text-[#0d121c] text-lg font-bold leading-tight tracking-[-0.015em]">
                    Employer Preview
                    </p>
                    <div className="flex items-end gap-3 justify-between">
                    <p className="text-[#4b679b] text-base font-normal leading-normal">
                        This is how your profile will appear to potential employers. Use the toggles above to control visibility of each section.
                    </p>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#0f5ef0] text-[#f8f9fc] text-sm font-medium leading-normal">
                        <span className="truncate">View Full Profile</span>
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
      
    </div>
  );
};

export default ResumeBuilderPage;
