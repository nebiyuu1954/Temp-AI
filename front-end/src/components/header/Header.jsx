import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  // Determine which button to show based on current route
  const isSignupRoute = window.location.pathname === '/signup';

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  if (!user) {
    // Public header
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6edf4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0c141d]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#0c141d] text-lg font-bold leading-tight tracking-[-0.015em]">InternLink</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-[#0c141d] text-sm font-medium leading-normal" href="#">{t('header.home')}</a>
            <a className="text-[#0c141d] text-sm font-medium leading-normal" href="#">{t('header.about')}</a>
            <a className="text-[#0c141d] text-sm font-medium leading-normal" href="#">{t('header.contact')}</a>
          </div>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
          <button
            className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 text-sm font-bold leading-normal tracking-[0.015em] ${
              isSignupRoute
                ? 'bg-white text-[#007bff] border border-[#007bff]'
                : 'bg-[#007bff] text-slate-50'
            }`}
            onClick={() => {
              if (isSignupRoute) {
                navigate('/login');
              } else {
                navigate('/signup');
              }
            }}
          >
            <span className="truncate">{isSignupRoute ? t('header.login') : t('header.signUp')}</span>
          </button>
        </div>
      </header>
    );
  } else if (user.role === 'APPLICANT') {
    // Applicant header
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6edf4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0c141d]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#0c141d] text-lg font-bold leading-tight tracking-[-0.015em]">InternLink</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex gap-2">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7ebf3] text-[#0c141d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              onClick={() => navigate('/notifications')}
            >
              <div className="text-[#0c141d]" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
          </div>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={handleLogoutClick}
          >
            <span className="truncate">{t('Logout')}</span>
          </button>
        </div>
      </header>
    );
  } else if (user.role === 'EMPLOYER') {
    // Employer header
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6edf4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0c141d]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-[#0c141d] text-lg font-bold leading-tight tracking-[-0.015em]">InternLink</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex gap-2">
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7ebf3] text-[#0c141d] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              onClick={() => navigate('/notifications')}
            >
              <div className="text-[#0c141d]" data-icon="Bell" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
          </div>
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="px-2 py-1 border border-gray-300 rounded text-sm"
          >
            <option value="en">English</option>
            <option value="am">አማርኛ</option>
          </select>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
            onClick={handleLogoutClick}
          >
            <span className="truncate">{t('Logout')}</span>
          </button>
        </div>
      </header>
    );
  } else {
    return <div>{t('Unknown role')}</div>;
  }
}
