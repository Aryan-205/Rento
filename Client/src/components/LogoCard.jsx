import React from "react";

export default function LogoCard({i}){
  return (
    <>
      <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl hover:scale-125 transition ease-in-out duration-500 cursor-pointer">
          <img src={`/${i}.png`} alt="ferrariLogo" className="w-16 h-auto"/>
        </div>
    </>
  )
}