import React from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import BookingCard from "../components/BookingCard";
import Footer from "../components/Footer";
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
      <div className={`fixed inset-0 z-50 p-8 flex items-center justify-center ${card ? 'display' : 'hidden'}`}>
        <BookingCard/>
      </div>
      <div className={`fixed inset-0 z-25 w-full h-full backdrop-blur-sm cursor-pointer ${card ? 'display' : 'hidden'}`} onClick={()=>setCard(prev=>!prev)}></div>
      <Footer/>
    </>
  )
}