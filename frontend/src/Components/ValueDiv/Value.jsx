import React from 'react'

//imported images...
import simple from '../../Assets/static/simple.png';
import openSource from '../../Assets/static/openSource.png';
import adFree from '../../Assets/static/addfree.webp';
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem] '>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px]-block '>We're here to support job seekers with our values</h1>

      <div className='grid gap-[10rem] grid-cols-3 items-center '>

         <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3 ">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                    <img src={simple} alt="" className='w-[120%] ' />
                </div>
                <span className='font-semibold text-textColor text-[18px] '>
                  Simplicity
                  </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.6] py-[1rem] font-semibold '>
            We're dedicated to crafting beautiful, simple experiences while eliminating time-wasting materials.
            </p>
         </div>

         <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3 ">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                    <img src={openSource} alt="" className='w-[120%] ' />
                </div>
                <span className='font-semibold text-textColor text-[18px] '>
                  <a href="https://www.github.com/viveknapit" className=''>Open-source</a>
                  </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.6] py-[1rem] font-semibold '>
            Our web app thrives on open-source collaboration, We'll wait for your contribution.
            </p>
         </div>

         <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
            <div className="flex items-center gap-3 ">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center ">
                    <img src={adFree} alt="" className='w-[120%] ' />
                </div>
                <span className='font-semibold text-textColor text-[18px] '>
                  Ads Free
                  </span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.6] py-[1rem] font-semibold '>
            An ad-free haven, where your browsing experience remains undisturbed. No ads.
            </p>
         </div>
      </div>
        <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px] ">
          <div>
            <h1 className='text-blueColor text-[30px] font-bold '>
                Ready to start career
            </h1>
            <h2 className='text-textColor text-[25px] font-bold '>
              let's get started!
            </h2>
          </div>
          <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor '>
            Get started
          </button>
        </div>
    </div>
  )
}

export default Value
