import React from 'react'


//imported icons from react icon
import {AiFillInstagram} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
        <div>
          <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem]  "><strong>Great</strong>mind</h1>
          </div>

          <p className='text-white pb-[13px] opacity-70 leading-7 '>
              we are tring to help job seeers thought our site, and help him out to find a great job and companies will find great mind.
          </p>
        </div>
        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white  '>
              Company
            </span>
            <div className='grid gap-3 '>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>About us</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Features</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>News</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>FAQ</li>
            </div>
        </div>
        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white  '>
              Resources
            </span>
            <div className='grid gap-3 '>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Account</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Support Center</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Feedbac</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Contact us</li>
            </div>
        </div>
        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white  '>
              Support
            </span>
            <div className='grid gap-3 '>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Events</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Promo</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Req demo</li>
                <li className='text-white opacity-[.7] hover:opacity-[1] '>Careers</li>
            </div>
        </div>
        <div className="grid">
            <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white  '>
                Contact info
            </span>
            <div>
               <small className='text-[14px] text-white'>
                  vivenapit12@gmail.com 
                </small> 
                <div className='icons flex gap-4 py-[1rem] '>
                  <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px]  rounded-full icon text-blueColor '/>
                  <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px]  rounded-full icon text-blueColor '/>
                  <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor '/>
                  <BsLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor '/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
