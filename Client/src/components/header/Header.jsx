import React from "react";
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white rounded-lg">
      <nav>
        <p>Rento</p>
        <div>
          <NavLink
            to={'/cars'}
            className={({isActive})=>{
              `${isActive ? 'text-purple-500' : 'text-black'}
              text-lg font-serif`
            }}
          >
            Cars
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header