import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../components/header/Header';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col px-10 py-5 max-w-[960px] mx-auto w-full">
        <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfBB54SlOxjDnE6x4RtWK7fTuHNWjQydZHZ4OK0dysGKENHR8Sv1eAvI8O4LmmJEkrj1VWQ-AY_IokBrVFC0sPWVDTweAixNoFA0XhTfepb8IlB4udvE-W1i1dmuN_9VsOQv9LaAISWHARS9DzZXDyu7OPG1JxvfnouAUPP14-C3T0uvRvXHfirJ9T3DVk3rXJe7BjxWEyOjUzoiZuJs7LkWDN6UyeRDfTr4QO_4S_1iU00pHx8ULCecNMnz9vOR5nGzmXsRY6Mjw")' }}>
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{t('landing.title')}</h1>
            <h2 className="text-white text-sm font-normal leading-normal">{t('landing.subtitle')}</h2>
          </div>
          <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px]">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#4571a1] flex border border-[#cddbea] bg-slate-50 items-center justify-center pl-[15px] rounded-l-lg border-r-0" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input placeholder="Search internships..." className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-full placeholder:text-[#4571a1] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" />
              <div className="flex items-center justify-center rounded-r-lg border-l-0 border border-[#cddbea] bg-slate-50 pr-[7px]">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#007bff] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Search</span>
                </button>
              </div>
            </div>
          </label>
        </div>
        <h2 className="text-[#0c141d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#cddbea] bg-slate-50 p-4 flex-col">
            <div className="text-[#0c141d]" data-icon="PencilSimple" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#0c141d] text-base font-bold leading-tight">Create Your Profile</h2>
              <p className="text-[#4571a1] text-sm font-normal leading-normal">Build a comprehensive profile showcasing your skills and experience.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#cddbea] bg-slate-50 p-4 flex-col">
            <div className="text-[#0c141d]" data-icon="Upload" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M240,136v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V136a16,16,0,0,1,16-16H80a8,8,0,0,1,0,16H32v64H224V136H176a8,8,0,0,1,0-16h48A16,16,0,0,1,240,136ZM85.66,77.66,120,43.31V128a8,8,0,0,0,16,0V43.31l34.34,34.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,77.66ZM200,168a12,12,0,1,0-12,12A12,12,0,0,0,200,168Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#0c141d] text-base font-bold leading-tight">Upload Resume</h2>
              <p className="text-[#4571a1] text-sm font-normal leading-normal">Upload your resume to apply for internships.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#cddbea] bg-slate-50 p-4 flex-col">
            <div className="text-[#0c141d]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#0c141d] text-base font-bold leading-tight">Browse Opportunities</h2>
              <p className="text-[#4571a1] text-sm font-normal leading-normal">Explore a wide range of internship opportunities from leading tech companies.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#cddbea] bg-slate-50 p-4 flex-col">
            <div className="text-[#0c141d]" data-icon="Briefcase" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#0c141d] text-base font-bold leading-tight">Start Your Internship</h2>
              <p className="text-[#4571a1] text-sm font-normal leading-normal">Begin your internship and gain valuable industry experience.</p>
            </div>
          </div>
        </div>
        <h2 className="text-[#0c141d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Internships</h2>
        <div className="flex overflow-y-auto scrollbar-hide">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1sWY9s3CIihCly4vzLvevrf-3eihyrlSLVwIPq1jN1UXEg7vUKUZDioxB2-AfGcqX0R1cQrHYisTFwSNXj9M14L38fsehGyWLCTOUzheGEYPOEs6dFiyeD7Zjjy7chrYCBTsTKUm2viFLSf_bJzwQVh9pkluNcb9l5baYx3tX9xlgt5fdDq-TlBVL_9Ohn_9UY9vrP96KvjcuZwFelcdDur_hwUJwIFAVKbi6D8C-E4N12WODfkcxymAMWeG88WHeerN4AMmpXbI")' }}></div>
              <div>
                <p className="text-[#0c141d] text-base font-medium leading-normal">Software Engineering Intern</p>
                <p className="text-[#4571a1] text-sm font-normal leading-normal">Tech Solutions Inc.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPGePuhcgccaAJO8wW1qmKDcnpJtdHVAOEY1siKp1HcXY2aIHYhsNBaWW-SwqmCujtNQAovI25ZCNpiKBrosPgx074YD4ssJgicOmUC92hLj8x42El48327JPr1EGnRmIz2SxHO-QtxKmWwXhNSYXFFWgRdFmdSM915FNfFPnPco2OwBIBMURI0E23aKhqh87D2FBewlNhO_mxUp-bBdZex9ZpcyIX7XvSak6y6D-E8h4jwbMf2AC3Ev_5dKn6KkD-YFf6EOHzX9M")' }}></div>
              <div>
                <p className="text-[#0c141d] text-base font-medium leading-normal">Data Analyst Intern</p>
                <p className="text-[#4571a1] text-sm font-normal leading-normal">Data Insights Ltd.</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB81BtZRQmOWX5HygnJdgCmbEIYAx7Goi4xFV_iCXKeskpRx562JVtlK5JBpSTUYCgoJOjZI-8AuXpP7RA3huyck4wExPfJKIfv2A7VEw8o5fzgJry64o49VstHZlWwHk5BopDy5pCJAFMCqZZlMnp2-oqQfPjk8f8cV0fjwUqiqzWipFGOaqQ_3nCkZjZEYxGSH0ck4HkgnTlQ5QfRRJZMUr_9OsA8ttQ2QwUstIUQdavYWFxmUcVy2tLBh0lICFInVtvkS58LYdY")' }}></div>
              <div>
                <p className="text-[#0c141d] text-base font-medium leading-normal">UI/UX Design Intern</p>
                <p className="text-[#4571a1] text-sm font-normal leading-normal">Design Innovators Co.</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#0c141d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Partners</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCL5dsK_w4yC_Gw0yQYWdMGjad7ol_xXvzoSoLqUPwPTwVOz_jLIWXBi3sCeG4GluLwtFOfHotJRdT9lmaSKHvRB1oXdq9My0gKV5NU-o8LCh8c28LWHAeL9LPBsKaN4j_2GFwXDurBh0a6GJ2ehHHVoLjLWjBm2plWXlxCx8SUu9ZpldXdWh_Nl0heCyQfzhf0hDXlWvw71voF8iETafPDnJ2PFVJO5mlunXpYFTro88GkPCYm--VcecT7vPId5OINFKAMuRYBP2o");' }}></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA03Ic0dBtQernJCFr5mD6dt_Q3vb1jF15YWgVZjuxUPX82i_OP6kl5c4ugu2nLVC_ErDGlM-YnHor-1FCQH4F1Hk_I6oHTwTIjz39SWjM0vLORHx6A1rmvNWodSzvZrZRWdFr6pLdb6vXOULrshqZDoyv58lX80kBebDfi9PZ_UCKGO82Vw37M3-l9KDiot-AzsIC6p4cMZE94WiVthg7J94WpjplG11LD92cMQ7G2JZXGiydE7yAVHbHgmhp3PTPTMkmWm4UL7-A");' }}></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9Lmwhizfw1941Vs7m-Jp9-Sht5ISVQ2Y5Zf4ORSyIAS9HksVfCLjnshVva1LkoQ8smn32_nk6SpTlrEBL9fMtBmbEq7jwkb8TBuuGD1sTWSJEZKCJRCshywKXkSufxkD4AysSF6mQomKEYEJmz4HQLbmssSRXiOQweR2Uk_QsWv9HaKAWBPuZ0w5W0Y9LFw2-dRr-ISHqRJajBWTMpxG83gKftIyagRMMapeMfzZ5z9HeTvNtPEnT3_2W8maQwxNUM78-nvP6xGU")' }}></div>
          </div>
        </div>
        <h2 className="text-[#0c141d] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Testimonials</h2>
        <div className="p-4">
          <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-lg pt-[132px]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDyZTI07wRhKRe4sgpSxKu8SOQGaOu43_VwApvPzqmdRVZXIzAbBo6e6RSmSs8ebs_PdkXbA-1ZlqF0pagwBoYdizpWxQaBYugyQ2lHBJU2hKnjo6-L6soQGAILJmMY0si2tjgtJwrTUYmJ8giBGUzB8tS_dTx6CVgWvaPjU4zAH_YqgRR8f9e7M4jVuFXpUEKt4-zTdCBnpoKrvyTxYI6DchDalAwQkap5KSEsiWRhj6Qls9eCQMO4rB3DNqJ3VEE7BWBkohs5OQI")' }}>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                  "InternLink helped me land an internship at a leading tech firm. The platform is easy to use and the support is excellent."
                </p>
                <p className="text-white text-base font-medium leading-normal">Abebe Kebede, Student</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-lg pt-[132px]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1VkhXMEOq8AJRoJ7sOqINa7ZvjbjcmskOIXepNizAaZFDpnrk_0FhWbPLN_skFLUPQb-eouy3yEiXInOFk-ZkjwlQzqKmKFL_51n2OWqYiS_q5pG4w8KvE7C0OxCv38l0xgaIuU5mUpoS-Exs7OX2_GQmbiryF19KmhFsb_2Zz8KjVvlZmpExdKWeZv-z6VPLw1YW1v8belVr7lDMV8ULPhiw0HhghaOB3AcmN9dFlqlkFUT3TTzlTHdMzZ_pYWdOIhjIeAITP20")' }}>
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                  "We've found talented interns through InternLink. It's a great way to connect with motivated students."
                </p>
                <p className="text-white text-base font-medium leading-normal">Selamawit Tesfaye, Employer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <h3 className="text-[#0c141d] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Contact Us</h3>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Name</p>
              <input placeholder="Your Name" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal" />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Email</p>
              <input placeholder="Your Email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal" />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Message</p>
              <textarea placeholder="Your Message" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] min-h-36 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal"></textarea>
            </label>
          </div>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#007bff] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Submit</span>
            </button>
          </div>
          <footer className="flex flex-col gap-6 px-5 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a className="text-[#4571a1] text-base font-normal leading-normal min-w-40" href="#">About</a>
              <a className="text-[#4571a1] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
              <a className="text-[#4571a1] text-base font-normal leading-normal min-w-40" href="#">Terms</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#">
                <div className="text-[#4571a1]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="text-[#4571a1]" data-icon="LinkedinLogo" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                  </svg>
                </div>
              </a>
            </div>
            <p className="text-[#4571a1] text-base font-normal leading-normal">© 2024 InternLink. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
