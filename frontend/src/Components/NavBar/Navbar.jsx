import React from 'react'

const Navbar = () => {
  return (
    <div className = 'navBar flex justify-between items-center p-[3rem] '>
      <div className="logoDiv cursor-pointer">
        <h1 className="logo text-[25px] text-blueColor "><strong>Great</strong>mind</h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Home</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Explore</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">About us</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Contact us</li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Login/Register</li>
      </div>
    </div>
  )
}

export default Navbar
