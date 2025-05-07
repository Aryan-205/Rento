import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

export default function Header(){
  
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <header className=" fixed inset-x-4 md:inset-x-10 top-4 z-10 bg-white text-black rounded-3xl ">
        <nav className=" flex flex-wrap justify-between items-center py-2 px-6 font-medium font-serif ">
          <NavLink
            to={'/'}
            className={`text-lg md:text-2xl font-bold bg-gradient-to-tr from-red-600 to-black bg-clip-text text-transparent shrink`}>
            Rento
          </NavLink>
          <div className="hidden md:flex space-x-6 mt-2 md:mt-0 text-lg md:text-xl pl-8">
              <NavLink
                to={'/cars'}
                className={({isActive})=>`${isActive ? 'text-red-600' : `text-black`}`}
              >
                Cars
              </NavLink>
              <NavLink
                to={'/locations'}
                className={({isActive})=>`${isActive ? 'text-red-600' : `text-black`}`}
              >
                Locations
              </NavLink>
              <NavLink
                to={'/aboutUs'}
                className={({isActive})=>`${isActive ? 'text-red-600' : `text-black`}`}
              >
                About Us
              </NavLink>
          </div>
          <div className="flex">
            <button className="hover:border hover:border-black rounded-full p-1" onClick={()=>setSidebar((prev)=>!prev)}><img src="/hamburgerMenu.png" alt="" className="display md:hidden w-4 h-auto"/></button>
            <button
              className="py-1 px-4 border border-black font-serif rounded-full text-sm md:text-xl hidden md:flex"
              >
              Bookings
            </button>
          </div>
        </nav>
      </header>
      <div className={`fixed top-0 right-0 bg-black text-white w-60 flex-col z-50 h-full p-4 text-xl gap-8 rounded-l-xl border border-white ${sidebar ? 'flex' : 'hidden' } '`}>
              <NavLink
                to={'/cars'}
                className={`border-b border-white p-2`}
              >
                Cars
              </NavLink>
              <NavLink
                to={'/locations'}
                className={`border-b border-white p-2`}
              >
                Locations
              </NavLink>
              <NavLink
                to={'/aboutUs'}
                className={`border-b border-white p-2`}
              >
                About Us
              </NavLink>
              <NavLink
                to={'/booking'}
                className={`border-b border-white p-2`}
              >
                Bookings
              </NavLink>
            </div>
    </>
  )
}