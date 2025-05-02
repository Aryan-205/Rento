import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white rounded-lg p-2 ">
      <nav className="flex">
        <h1 className="text-black">hello from header</h1>
        <p>Rento</p>
        <div>
            <NavLink
            to={'/cars'}
            >
              Cars
            </NavLink>
            <NavLink
            to={'/locations'}
            >
              Locations
            </NavLink>
            <NavLink
            to={'/deals'}
            >
              Deals
            </NavLink>
        </div>
        <button>
          Contact Us
        </button>
      </nav>
    </header>
  )
}

