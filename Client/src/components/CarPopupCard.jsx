import React from "react";

export default function CarPopupCard({name,price,door,type,brand}){
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-lg border border-white p-4 bg-black gap-2">
        <img src="/ferrari1.jpg" alt="" className="w-96 h-auto "/>
        <div className="flex justify-between">
          <div>
            <p className="text-white text-2xl">{name}</p>
            <p className="text-white text-2xl items-end">Price:  <span ></span></p>
            <p className="text-gray-500 text-lg">Ferrari</p>
            <p className="text-gray-500 text-lg">Door: </p>
            <p className="text-gray-500 text-lg">Type: </p>
          </div>
          <div className="flex flex-col items-end">
            <p>.</p>
            <p className="text-gray-500 text-lg">{price}/Day</p>
            <p className="text-gray-500 text-lg ">{brand}</p>
            <p className="text-gray-500 text-lg">{door}</p>
            <p className="text-gray-500 text-lg">{type}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="text-white border border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out">Add to List</button>
          <button className="text-white border border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out">Buy Now</button>
        </div>
      </div>
    </div>
    </>
  )
}