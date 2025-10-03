import React from 'react'
import { Header } from '../../components/header/Header'

export const SignUp = () => {
  const [isStudent, setIsStudent] = React.useState(true);

  // States for form data
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rePassword, setRePassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [showRePassword, setShowRePassword] = React.useState(false);

  // Reset fields when switching user type
  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setRePassword('');
    setShowPassword(false);
    setShowRePassword(false);
  }, [isStudent]);

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
            Sign Up
          </h2>

          <div className="pb-3">
            <div className="flex border-b border-[#cddbea] px-4 gap-8">
              <button
                className={`flex flex-col items-center justify-center border-b-[3px] ${
                  isStudent ? 'border-b-[#007bff] text-[#0c141d]' : 'border-b-transparent text-[#4571a1]'
                } pb-[13px] pt-4 bg-transparent`}
                onClick={() => setIsStudent(true)}
                type="button"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Sign Up as Student
                </p>
              </button>

              <button
                className={`flex flex-col items-center justify-center border-b-[3px] ${
                  !isStudent ? 'border-b-[#007bff] text-[#0c141d]' : 'border-b-transparent text-[#4571a1]'
                } pb-[13px] pt-4 bg-transparent`}
                onClick={() => setIsStudent(false)}
                type="button"
              >
                <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                  Sign Up as Employer
                </p>
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Email</p>
              <input
                placeholder="Enter your email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
              />
            </label>
          </div>

          {/* Password */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Password</p>

              {/* wrapper that matches input height */}
              <div className="relative w-full">
                <input
                  placeholder="Password"
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
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-3 flex items-center justify-center px-2 p-1 rounded hover:bg-slate-100 transition"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </label>
          </div>

          {/* Re-enter Password */}
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#0c141d] text-base font-medium leading-normal pb-2">Re Enter Password</p>

              <div className="relative w-full">
                <input
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal pr-12"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  type={showRePassword ? 'text' : 'password'}
                  autoComplete="new-password"
                />

                <button
                  type="button"
                  onClick={() => setShowRePassword((v) => !v)}
                  aria-label={showRePassword ? 'Hide password' : 'Show password'}
                  className="absolute inset-y-0 right-3 flex items-center justify-center px-2 p-1 rounded hover:bg-slate-100 transition"
                >
                  <EyeIcon open={showRePassword} />
                </button>
              </div>
            </label>
          </div>

          {/* Submit */}
          <div className="flex px-4 py-3">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#007bff] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Sign Up</span>
            </button>
          </div>

          <p className="text-[#4571a1] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
            Already have an account? <a href="/login" className="text-blue-500">login</a>
          </p>
        </div>
      </div>
    </>
  );
}
