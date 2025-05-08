import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
  return (
    <>
      <div className="fixed top-0 right-0 bg-black text-white w-60 flex flex-col z-50 h-full p-4 text-xl gap-8 rounded-l-xl border border-white">
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