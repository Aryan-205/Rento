import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="relative flex justify-center items-center">
      <nav className="fixed top-4 z-10 flex justify-between items-center bg-white/10 backdrop-blur-md rounded-3xl p-2 text-2xl font-medium font-serif space-x-80 h-12 px-16">
        <NavLink
          to={'/'}
          className={`text-3xl font-bold bg-gradient-to-tr from-red-600 to-white bg-clip-text text-transparent `}
        >
          Rento
        </NavLink>
        <div className="space-x-12 ">
            <NavLink
              to={'/cars'}
              className={({isActive})=>`${isActive ? 'text-red-600' : `text-white`}`}
            >
              Cars
            </NavLink>
            <NavLink
              to={'/locations'}
              className={({isActive})=>`${isActive ? 'text-red-600' : `text-white`}`}
            >
              Locations
            </NavLink>
            <NavLink
              to={'/deals'}
              className={({isActive})=>`${isActive ? 'text-red-600' : `text-white`}`}
            >
              Deals
            </NavLink>
        </div>
        <button
          className="p-1 px-4 bg-white text-black font-serif rounded-3xl text-xl"
        >
          Contact Us
        </button>
      </nav>
    </header>
  )
}

