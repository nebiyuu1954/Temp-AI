import React from 'react'
import { Header } from '../../components/header/Header'

const Login = () => {
  return (
     <>
        <Header/>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5  flex-1">
            <h2 class="text-[#0c141d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome back</h2>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0c141d] text-base font-medium leading-normal pb-2">Email</p>
                <input placeholder="email@example.com" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal" value=""/>
              </label>
            </div>
            <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label class="flex flex-col min-w-40 flex-1">
                <p class="text-[#0c141d] text-base font-medium leading-normal pb-2">Password</p>
                <input placeholder="Enter your password" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c141d] focus:outline-0 focus:ring-0 border border-[#cddbea] bg-slate-50 focus:border-[#cddbea] h-14 placeholder:text-[#4571a1] p-[15px] text-base font-normal leading-normal" value=""/>
              </label>
            </div>
            <p class="text-[#4571a1] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Forgot Password?</p>
            <div class="flex px-4 py-3">
              <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#007bff] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                <span class="truncate">Log In</span>
              </button>
            </div>
            <p class="text-[#4571a1] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center ">Don't have an account? <a href="/signup" className='text-blue-500'>Sign up</a></p>
          </div>
        </div>
        </>
  )
}

export default Login
