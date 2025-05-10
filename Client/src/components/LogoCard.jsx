import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoCard({i}){
  const navigate = useNavigate()
  return (
    <>
      <div className="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col justify-center items-center border border-white rounded-xl hover:scale-125 transition ease-in-out duration-500 cursor-pointer p-2" onClick={()=>navigate('/cars')}>
        <img src={`/${i}.png`} alt="ferrariLogo" className="w-8 md:w-12 lg:w-16 h-auto"/>
      </div>
    </>
  )
}