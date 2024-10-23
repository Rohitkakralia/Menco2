import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
const Navbar2 = () => {
    let Links =[
      {name:"ABOUT US",link:"/"},
      {name:"OUR PARTNERS",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full bg-white fixed z-10 top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white text-[#580092] py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex text-[#580092] items-center font-[Poppins] 
     '>
        <img src="/Logo.jpeg"   className="w-[50px] h-[50px]" alt="logo" />
        MENCO
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <CiMenuFries name={open ? 'close':'menu'}/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-white bg-slate-400  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-200 hover:font-bold '>{link.name}</a>
            </li>
          ))
        }
        <button className="btn btn-neutral bg-[#580092] rounded-xl text-white px-8 md:ml-6"> <NavLink to="/login" >
                Login
              </NavLink></button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar2