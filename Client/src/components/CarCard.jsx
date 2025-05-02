import React from "react";

export default function CarCard({car}){
  return (
    <>
      <div className="p-2 border border-white rounded-xl ">
        <img src={`/${car}.jpg`} alt="" className="h-auto rounded-lg"/>
        <p className="text-white text-lg">La Ferrari 2023</p>
        <p className="text-white">500$ /Day</p>
      </div>
    </>
  )
}