import React from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import BookingCard from "../components/BookingCard";
import { useState } from "react";


export default function Cars(){
  const [card, setCard] = useState(false)
  return (
    <>
      <Header/>
      <button onClick={()=>setCard(prev=>!prev)} className="text-red-500 p-2 border border-red-500 mt-20">Change</button>
      <div>
        <img src="/porschegt3rs.jpg" alt="" className="object-fill"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-8 -mt-24 ">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      {card && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setCard(false)}
          ></div>

          {/* Modal */}
          <div
            className="relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <BookingCard />
          </div>
        </div>
      )}
    </>
  )
}