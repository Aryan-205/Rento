import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="w-full fixed top-4 z-10 bg-white text-black rounded-3xl px-10">
      <nav className=" flex flex-wrap justify-between items-center py-2 font-medium font-serif ">
        <NavLink
          to={'/'}
          className={`text-lg md:text-2xl font-bold bg-gradient-to-tr from-red-600 to-black bg-clip-text text-transparent shrink`}>
          Rento
        </NavLink>
        <div className="hidden md:flex space-x-6 mt-2 md:mt-0 text-lg md:text-xl">
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
          <button className="hover:border hover:border-black rounded-full p-1"><img src="/hamburgerMenu.png" alt="" className="display md:hidden w-4 h-auto"/></button>
          <button
            className="py-1 px-4 border border-black font-serif rounded-full text-sm md:text-xl hidden md:flex">
            Bookings
          </button>
        </div>
      </nav>
    </header>
  //   <header className="w-full bg-white shadow-md fixed top-0 z-50">
  // <nav className="flex flex-wrap items-center justify-between px-4 py-2 md:px-10 md:py-4">
  //   {/* Brand */}
  //   <NavLink to="/" className="text-3xl font-bold bg-gradient-to-tr from-red-600 to-black bg-clip-text text-transparent">
  //     Rento
  //   </NavLink>

  //   {/* Nav Links */}
  //   <div className="hidden md:flex space-x-6 mt-2 md:mt-0 text-lg">
  //     {/* Conditionally styled links using isActive */}
  //     <NavLink to="/cars" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}>Cars</NavLink>
  //     <NavLink to="/locations" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}>Locations</NavLink>
  //     <NavLink to="/aboutUs" className={({ isActive }) => isActive ? 'text-red-600' : 'text-black'}>About Us</NavLink>
  //   </div>

  //   {/* Button */}
  //   <button className="mt-2 md:mt-0 px-4 py-1 border border-black rounded-full text-sm md:text-lg">
  //     Bookings
  //   </button>
  // </nav>
// </header>
  )
}

