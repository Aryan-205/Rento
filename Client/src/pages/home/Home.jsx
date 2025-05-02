import React from "react";
import Header from "../../components/Header.jsx";
import LogoCard from "../../components/LogoCard.jsx";
import logos from './logo.js'

export default function Home() {
  return (
    <>
    <div className="relative">
      <Header/>
      <img src="/ferrari1.jpg" alt="Ferrari" className="object-fill" /> 
      <p className="absolute top-48 right-16 z-10 text-white text-5xl font-bold font-serif tracking-wide">LIVE YOUR DREAM</p>
      <hr />
      <div className="text-white my-40 flex px-4 justify-around">
        <p className="text-xl w-96">About Us -</p>
        <p className="text-5xl justify-self-end w-auto text-wrap tracking-wide leading-relaxed">
          From Exotic sports cars to Luxury sedans and SUVs, Bola's Exotic Car Collection offers an<span className="text-gray-500"> exceptional selection and Bola's trusted, personalised service</span>
        </p>
      </div>
      <hr />
      <div className="flex justify-around my-16">
        {logos.map((img)=>
          <LogoCard i={img}/>
        )}
      </div>
    </div>
    </>
  )
}