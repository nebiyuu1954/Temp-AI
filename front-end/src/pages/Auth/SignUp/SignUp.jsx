import React, { useState } from 'react'
import { Header } from '../../../components/header/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // States for form data
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const [role, setRole] = React.useState('APPLICANT');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  const getFriendlyMessage = (message) => {
    if (message.includes('too short')) return t('passwordTooShort', 'Password must be at least 8 characters long.');
    if (message.includes('too common')) return t('passwordTooCommon', 'Please choose a less common password.');
    if (message.includes('too similar')) return t('passwordTooSimilar', 'Password should not be similar to your email.');
    if (message.includes('numeric')) return t('passwordNumeric', 'Password cannot be entirely numeric.');
    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    if (password !== rePassword) {
      setErrors({ re_password: t('passwordsDoNotMatch', 'Passwords do not match') });
      return;
    }
    try {
      await axios.post('http://localhost:8000/auth/users/', {
        email,
        password,
        re_password: rePassword,
        role,
      });
      navigate('/login');
    } catch (err) {
      console.error('Signup error:', err);
      if (err.response?.data) {
        const newErrors = {};
        for (const [field, messages] of Object.entries(err.response.data)) {
          if (Array.isArray(messages)) {
            newErrors[field] = messages.map(getFriendlyMessage).join(' ');
          } else {
            newErrors[field] = getFriendlyMessage(messages);
          }
        }
        setErrors(newErrors);
      } else {
        setErrors({ general: err.message || t('signupFailed', 'Signup failed') });
      }
    }
  };

  // Eye icon SVG
  const EyeIcon = ({ open }) => (
    <svg
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="pointer-events-none"
    >
      {open ? (
        <path
          stroke="#4571a1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 100-6 3 3 0 000 6z"
        />
      ) : (
        <path
          stroke="#4571a1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.94 17.94A10.97 10.97 0 0112 19c-7 0-11-7-11-7a21.82 21.82 0 014.06-5.94M9.53 9.53A3 3 0 0112 9c1.66 0 3 1.34 3 3 0 .47-.11.92-.29 1.32M1 1l22 22"
        />
      )}
    </svg>
  );

  return (
    <>
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
          <h2 className="text-[#0c141d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            {t('signUp', 'Sign Up')}
          </h2>

          {errors.general && <p className="text-red-500 text-center mb-4">{errors.general}</p>}

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">{t('email', 'Email')}</p>
                <input
                  placeholder={t('enterYourEmail', 'Enter your email')}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </label>
            </div>

            {/* Password */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">{t('password', 'Password')}</p>

                {/* wrapper that matches input height */}
                <div className="relative w-full">
                  <input
                    placeholder={t('password', 'Password')}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                  />

                  {/* centered vertically within input using inset-y-0 + flex items-center */}
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? t('hidePassword', 'Hide password') : t('showPassword', 'Show password')}
                    className="absolute inset-y-0 right-3 flex items-center justify-center px-2 p-1 rounded hover:bg-slate-100 transition"
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </label>
            </div>

            {/* Re-enter Password */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">{t('reEnterPassword', 'Re Enter Password')}</p>

                <div className="relative w-full">
                  <input
                    placeholder={t('password', 'Password')}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal pr-12"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    type={showRePassword ? 'text' : 'password'}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowRePassword((v) => !v)}
                    aria-label={showRePassword ? t('hidePassword', 'Hide password') : t('showPassword', 'Show password')}
                    className="absolute inset-y-0 right-3 flex items-center justify-center px-2 p-1 rounded hover:bg-slate-100 transition"
                  >
                    <EyeIcon open={showRePassword} />
                  </button>
                </div>
                {errors.re_password && <p className="text-red-500 text-sm mt-1">{errors.re_password}</p>}
              </label>
            </div>

            {/* Role */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">{t('role', 'Role')}</p>
                <select
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 p-[15px] text-base font-normal leading-normal"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="APPLICANT">{t('applicant', 'Applicant')}</option>
                  <option value="EMPLOYER">{t('employer', 'Employer')}</option>
                </select>
                {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
              </label>
            </div>

            {/* Submit */}
            <div className="flex px-4 py-3">
              <button type="submit" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#007bff] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">{t('signUp', 'Sign Up')}</span>
              </button>
            </div>
          </form>

          <p className="text-[#4571a1] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            {t('alreadyHaveAccount', 'Already have an account?')} <a href="/login" className="text-blue-500">{t('login', 'login')}</a>
          </p>
        </div>
      </div>
    </>
  );
}
