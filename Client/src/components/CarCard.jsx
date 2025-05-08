import React from "react";

export default function CarCard(){
  return (
    <>
      <div className="p-2 border border-white rounded-xl hover:scale-110 transition ease-in-out duration-500 cursor-pointer gap-2 flex flex-col">
        <img src={`/ferrari1.jpg`} alt="" className="h-auto rounded-lg "/>
        <p className="text-white text-xl">La Ferrari 2023</p>
        <p className="text-white">500$ /Day</p>
      </div>
    </>
  )
}