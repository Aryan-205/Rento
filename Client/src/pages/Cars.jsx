import React from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";

export default function Cars(){
  return (
    <>
      <Header/>
      <div>
        <button>Filter</button>
      </div>
      <div className="pt-40 flex gap-8 px-20">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </>
  )
}