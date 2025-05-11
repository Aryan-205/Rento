import React from "react";

export default function CarPopupCard({card}){
  return (
    <>
    <div className="flex justify-center items-center">
      <div className="flex flex-col rounded-lg border border-white p-4 bg-black gap-2">
        <img src={`${card.carImage}`} alt="" className="w-96 h-auto "/>
        <div className="flex justify-between">
          <div>
            <p className="text-white text-2xl">{card.name}</p>
            <p className="text-white text-2xl items-end">Price:</p>
            <p className="text-gray-500 text-lg">Brand</p>
            <p className="text-gray-500 text-lg">Doors: </p>
            <p className="text-gray-500 text-lg">Type: </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-black text-2xl">.</p>
            <p className="text-gray-500 text-lg"><span className="text-white">${card.price}</span>/Day</p>
            <p className="text-gray-500 text-lg ">{card.brand}</p>
            <p className="text-gray-500 text-lg">{card.doors}</p>
            <p className="text-gray-500 text-lg">{card.type}</p>
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