import React from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

export default function Cars(){
  return (
    <>
      <Header/>
      <div>
        <img src="/porschegt3rs.jpg" alt="" className="object-fill"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-8 -mt-12">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <Footer/>
    </>
  )
}