import React from "react";

export default function BookingCard (){
  return (
    <>
      <div className="flex flex-col md:flex-row rounded-lg border border-white p-4 w-full bg-black">
        <img src="/ferrari1.jpg" alt="" className="w-96 h-auto "/>
        <div className="md:px-8 flex flex-col justify-between">
          <div>
            <p className="text-white text-2xl">Ferrari 420</p>
            <p className="text-gray-500 text-lg">Ferrari</p>
            <p className="text-gray-500 text-lg">Door: </p>
            <p className="text-gray-500 text-lg">Type: </p>
          </div>
          <p className="text-white text-2xl items-end">Price:  <span className="text-gray-500 text-lg">/Day</span></p>
        </div>
      </div>
    </>
  )
}