import React, { useContext, useState } from 'react';
import { Header } from '../../../components/header/Header';
import Sidebar from '../../../components/sidebar/Sidebar';
import { AuthContext } from '../../../context/AuthContext';
import { useSidebar } from '../../../context/SidebarContext';
import { useTranslation } from 'react-i18next';

const RecommendedPage = () => {
  const { user } = useContext(AuthContext);
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { t } = useTranslation();
    const recommendedInternships = [
    {
        title: "Software Engineering Internship",
        company: "Tech Solutions Inc.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrPg4lI_-malErfNOiz9z8-BnmJCOhPTEWH3mkBYNG4PdUVM0HrJu1qpmynZA41xZTP6ySquFbZ5FkccN2li9vb5C8RLTi6S9VAmHBELoJqjOlW0ICkRP22iO-IUU6K8fVxRI08qpVkF8dIndbDfnw213551Yqy02J0rK14gUYi_13ecIjs8n4wmibg4uKR-q403ijTz8warAKpAejVV4QXp4YSV75VfEsv0a-pxLr1fEz7ZWbtw2ZE_J0s3Q5wreZ6QJFJtpfVIc"
    },
    {
        title: "Data Science Internship",
        company: "Data Insights Corp.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAoFuX5rC0BBXPYH5G4MD4LwmFK4RhdTcnbAtw2CBqTWfwuNVEPtDAwne9un1bfTVqJ69hoPf4clpihRNuB3Sakd3OA1eI58SinpK7vzghWgFgts-w0Rkipv8aw_BJb0Ivyhzk9V8wCbzcZZ3NQgmhQIwZM7VGuegySO4BGB9NZ-6CQ2Gv3C5gTxzjbc1rrx962VECYFbduzwQP94I_WGWqkpFbO-nchBoeW1FoA_whnVfhpaMk_H-lbMWHqQWSOmVGlgu0uWCZU"
    },
    {
        title: "UX/UI Design Internship",
        company: "Design Innovators Ltd.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG2Mix0fpIUlOHNT1GC1oUsa6JyfjCHpeBst58MznXk7IqTaaj-2x2J04aCTGqj51YFdgOlz_YVnVdkHVC8CcrVJ3xYZi5Y_CAIYqWFmD_CDAksRvYzyTh79ARVMoMIpFqReEQHsdH4dK3SNtY3ND6FrQS83PcGg_PfJNrIS6ZD_cMRZrl1m4vU3p2j_mJZNRJ8-TdP3K3rCSqsrPiaMCkyuXgp7ab0WHrMuklo_RK_WIrOwq9wAK7T_8Nv_-amb9G5QdkfVGheak"
    },
    {
        title: "Product Management Internship",
        company: "Product Visionaries LLC",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4qfuufgEq0yjL3zGGP9TGyUspmbPSOGAVtRDuBQ1QXMQ3c7P_VxZkEfioSoJ8hAjh7ZAuR1Lo7OcF7bq3tH3Zwgetk1_8oXBnriYafpsn24XTIKBx3P91niYYqWD-KFryCkURx2uPCto8fpllZQ2BDNo_h1eKiu6Z8HY7MmcAxCQ4mSS88Eqhfx_LMOoj2lw6eF8yg9h-8GxB88rURMy5j6bDU1UKZmdyzaNeQUaXpN7p0G5VrR0wV0SxQQgednryOeXcWxXoO2Y"
    },
    {
        title: "Marketing Internship",
        company: "Marketing Mavericks Co.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6MSMs4DzeuGVdSGSU_Hf5Brv2L8kT2YW55P71w0aYIRnAw1n7Vr9u_DwjQbgz-8VfaQzA0mZV9HeocSmWYrNrCQKSqZF5ILH8Lpow5UQuDyeUd9-F8rO2EJ-TYGtv1Q-lmzg10iNB87drNiUsTKX57qPFhTeEheOR07P0hV9XrFaPIFXprBqIMCWPhfUg-qlztZkuZ3gnU5Eb-ifaWHYs-efLaWWTiSqB_oXgASGsUh1hJNIW_C4HCGTcm0vOdqbptlEPI5BRSOc"
    },
    {
        title: "Finance Internship",
        company: "Financial Futures Group",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDv45z21WTneImSssJ6zVses0RPgEdDJv_RnsEzS6tAb52ZNjMwpxuXyhYrJshRZv7agd3LVvwto1WNaPEyCXa3MixVXTk_N19Tvg54BYhM0TXLmwK3Pd_8RDBy9mZZiwckEhycPkzUw7VqF8ghrZPhePG9Df0OXOwM53uYEtESSuy2F6JjWlXGQjkNbJmU6gz-_DG4C5f9r64LTU2l38VgqO5o83KyCxjElFF8jeW5FNu8tphlvcbkyT2EOHFCfhyk-XC9CUxYyrk"
    },
    {
        title: "AI Research Internship",
        company: "AI Innovations Lab",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7AKjnd-P-krpGP3ML7CjIFkA01wtRXr0IyO4OWG-GZODTGAjysXBcCPIm1FP4Ozu-4qOPOGvLaUXDBFQ5nLJYU8dPfwUszopipwx5CCHUI4ynrMl3xPcR0LJxk7KR89aLsVTqdJ3fFr6pYw_f69sjrit68G9EMXhG4GWMLzBa2mylzK1Y_fBJi8KFhmVQSzeKNdrJ9CEm0EBkmg1Q_apLW5iM4fYaJp0KLg5a6zZDqhloy6gey8LqrKs7vOUU__PHmNqdyZEkKr0"
    },
    {
        title: "Mobile Development Internship",
        company: "Mobile Masters Inc.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKk6NhsW8d4i6Zf7peV0s3xsIloy-U4fBYfh4G8wII5PEnX076KOMvW28ywneBgoDupDNKfXUnxOa1CRyoaXOpy5qHldPCTE0__6-GgcC1_P1O2K-C2eE-wMk3io-0EV6G-a5E1bjvjXTjGTA2eb7Rot8USfoaXeJLfWqbr2uylmkIbI1agBLAy2DI8dgW7rdDd2sWO1vd7_LBxW-xmXgQXVGweN_f3DFb8Eguw5IzRl6sLD0ldOQ-Ggn29dKHRyABefHC5ZrUio0"
    }
    ];

  // Pagination logic
  const itemsPerPage = 10; // 10 items per page (2 rows of 5)
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(recommendedInternships.length / itemsPerPage);

  const displayedInternships = recommendedInternships.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <Header />
      <div className="gap-1 px-6 flex flex-1 justify-center py-5 relative">
        <button
          onClick={toggleSidebar}
          className="absolute left-4 top-0 p-2 text-[#0c141d] hover:bg-gray-100 rounded"
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
          {/* Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#0d121c] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Recommended Internships
            </p>
          </div>

          {/* Search */}
          <div className="px-4 py-3">
            <label className="flex flex-col min-w-40 h-12 w-full">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-[#4b679b] flex bg-[#e7ebf3] items-center justify-center pl-4 rounded-l-lg border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121c] focus:outline-0 focus:ring-0 border-none bg-[#e7ebf3] placeholder:text-[#4b679b] px-4 rounded-l-none"
                />
              </div>
            </label>
          </div>

          {/* Buttons: Filters & Sort */}
          <div className="flex justify-stretch">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold tracking-[0.015em]">
                Filters
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7ebf3] text-[#0d121c] text-sm font-bold tracking-[0.015em]">
                Sort by: Match Score
              </button>
            </div>
          </div>

          {/* Internship Cards */}
          <div className="grid grid-cols-5 gap-3 p-4">
            {displayedInternships.map((internship, idx) => (
              <div key={idx} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${internship.image})` }}
                ></div>
                <div>
                  <p className="text-[#0d121c] text-base font-medium leading-normal">{internship.title}</p>
                  <p className="text-[#4b679b] text-sm font-normal leading-normal">{internship.company}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination (only if more than 10 items) */}
          {recommendedInternships.length > itemsPerPage && (
            <div className="flex justify-start flex-wrap gap-3 px-4 py-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`flex min-w-[32px] h-10 items-center justify-center rounded-lg px-3 text-sm font-bold tracking-[0.015em] ${
                    currentPage === page
                      ? 'bg-[#4b679b] text-white'
                      : 'bg-[#e7ebf3] text-[#0d121c]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedPage;
