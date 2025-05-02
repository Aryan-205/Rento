import React from "react";
import Header from "../components/header/Header.jsx";

export default function Home() {
  return (
    <>
    <div className="relative">
      <Header/>
      <img src="/ferrari1.jpg" alt="Ferrari" className="object-fill" /> 
      <hr />
      <div className="text-white my-16 space-y-4">
        <p className="text-xl">About Us -</p>
        <p className="text-6xl flex justify-self-end w-auto text-wrap">
          From Exotic sports cars to Luxury sedans and SUVs, Bola's Exotic Car Collection offers an exceptional selection and Bola's trusted, personalised service
        </p>
      </div>
      <hr />
      <div className="flex justify-around my-16">
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/ferrariLogo2.png" alt="ferrariLogo" className="w-16 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/lamboLogo1.png" alt="lamboLogo" className="w-22 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/porsheLogo.png" alt="porsheLogo" className="w-16 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/BMWLogo.png" alt="bmwlogo" className="w-20 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/RRLogo.png" alt="rrlogo" className="w-20 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/mercedesLogo.png" alt="rrlogo" className="w-20 h-auto"/>
        </div>
        <div className="w-28 h-28 flex justify-center items-center border border-white rounded-xl ">
          <img src="/landRoverLogo.png" alt="rrlogo" className="w-22 h-auto"/>
        </div>
      </div>
    </div>
    </>
  )
}