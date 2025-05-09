import React from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import BookingCard from "../components/BookingCard";

import { useSelector, useDispatch } from "react-redux";
import { setRender } from "../store/feature";


export default function Cars(){

  const render = useSelector((state) => state.feature.render);
  const dispatch = useDispatch();
  return (
    <>
      <Header/>
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
      {render && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => dispatch(setRender(false))}
          ></div>

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