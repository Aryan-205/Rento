import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="relative flex justify-center items-center">
      <nav className="fixed top-4 left-10 right-10 z-10 flex  justify-between items-center bg-white text-black rounded-3xl p-2 text-2xl font-medium font-serif h-12 px-16">
        <NavLink
          to={'/'}
          className={`text-3xl font-bold bg-gradient-to-tr from-red-600 to-black bg-clip-text text-transparent shrink`}
        >
          Rento
        </NavLink>
        <div className="space-x-12">
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
        <button
          className="p-1 px-4 bg-white text-black border-2 border-black font-serif rounded-3xl text-xl"
        >
          Bookings
        </button>
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

