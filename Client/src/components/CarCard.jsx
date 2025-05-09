import React from "react";
import { useDispatch } from "react-redux";
import { setRender } from "../store/feature.js";

export default function CarCard(){
  const dispatch = useDispatch()
  return (
    <>
      <div className="p-2 border border-white rounded-xl hover:scale-110 transition ease-in-out duration-500 cursor-pointer gap-2 flex flex-col" onClick={() => dispatch(setRender(true))}>
        <img src={`/ferrari1.jpg`} alt="" className="h-auto rounded-lg "/>
        <p className="text-white text-xl">La Ferrari 2023</p>
        <p className="text-white">500$ /Day</p>
      </div>
    </>
  )
}