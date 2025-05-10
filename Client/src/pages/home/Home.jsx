import React,{useState} from "react";
import Header from "../../components/Header.jsx";
import LogoCard from "../../components/LogoCard.jsx";
import logos from './logo.js'
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

export default function Home() {

  const navigate = useNavigate()

  const [brand,setBrand] = useState('')
  console.log(brand.brand,"from home")

  return (
    <>
    <div className="relative">
      <Header/>
      <img src="/ferrari1.jpg" alt="Ferrari" className="object-fill" /> 
      <p className="absolute top-[180px] right-16 z-10 text-white text-5xl font-bold font-serif tracking-wide">LIVE YOUR DREAM</p>
      <hr />
      <div className="text-white my-10 md:my-40 flex flex-col md:flex-row px-4 gap-8">
        <p className="text-2xl w-80">About Us -</p>
        <p className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-wrap tracking-wide leading-relaxed">
          From Exotic sports cars to Luxury sedans and SUVs, Bola's Exotic Car Collection offers an<span className="text-gray-500"> exceptional selection and Bola's trusted, personalised service</span>
        </p>
      </div>
      <div className="flex justify-around my-16">
        {logos.map((img)=>
          <LogoCard img={img} key={img.id} onSelect={(selected) => navigate("/cars",{state:{brandChosen: selected.brand}})}/>
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-white text-5xl md:text-7xl font-bold">Our Vehicle Fleet</p>
        <p className="text-white text-sm md:text-xl text-center">We provide our coustomers with the most increadible driving experience</p>
        <p className="text-white text-sm md:text-xl">That is why we have only world-class cars in our Fleet</p>
        <div className="flex text-white gap-1 md:gap-4 flex-wrap justify-center">
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>Premium</p>
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>Coupe</p>
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>Hypercars</p>
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>SportsCar</p>
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>Limousines</p>
          <p className={`rounded-3xl cursor-pointer border border-white text-sm md:text-lg p-2 hover:bg-white hover:text-black active:opacity-60 duration-500 ease-in-out}`}>Luxury</p>
        </div>
        <NavLink
          to={'/cars'}>
          <button className="text-white border border-white rounded-3xl p-2 px-4 hover:bg-white hover:text-black active:opacity-60 duration-500">Show All &#8594;</button>
        </NavLink>
        <div className="grid gap-8">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-72 rounded-xl border border-white group overflow-hidden">
              <img src="/2024-Rolls-Royce-Spectre-001-1600.jpg" alt="" className="object-cover hover:scale-125 transition ease-in-out duration-500" />
            </div>
            <div className="w-72 rounded-xl border border-white group overflow-hidden">
              <img src="/1957-BMW-507-Series-2-001-1600.jpg" alt="" className="object-cover hover:scale-125 transition ease-in-out duration-500" />
            </div>
            <div className="w-72 rounded-xl border border-white group overflow-hidden">
              <img src="/2022-Novitec-Lamborghini-Huracan-STO-001-1600.jpg" alt="" className="object-cover hover:scale-125 transition ease-in-out duration-500" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-56 rounded-xl border border-white group overflow-hidden">
              <img src="/2025-Porsche-911-Carrera-T-001-1600.jpg" alt="" className="object-cover hover:scale-125 transition ease-in-out duration-500" />
            </div>
            <div className="w-56 rounded-xl border border-white group overflow-hidden">
              <img src="/2019-Mercedes-AMG-G63-001-1600.jpg" alt="" className="object-cover hover:scale-125 transition ease-in-out duration-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8">
        <p className="text-gray-500 text-lg">Taking Care of every Client</p>
        <p className="text-white text-5xl md:text-7xl font-semibold">Key Features</p>
        <p className="text-white text-lg md:text-2xl w-[60%] my-8">We are all about out Client's Comfort and Safety. That's why we provide the best service you can imagine.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between mt-4 md:mt-20 gap-8">
          <div className=" shadow-[0_0_8px_1px_white] rounded-lg h-40 md:h-72 p-8 flex flex-col justify-between hover:bg-slate-950 transition ease-linear">
            <div className="rounded-full bg-gray-500 p-2 w-10 md:w-16 h-10 md:h-16 flex items-center justify-center">
              <img src="/24-7icon.png" alt="" className="w-8 md:w-12"/>
            </div>
            <p className="text-white text-md md:text-xl font-bold w-52">24-hour car delivery</p>
          </div>
          <div className=" shadow-[0_0_8px_1px_white] rounded-lg h-40 md:h-72 p-8 flex flex-col justify-between hover:bg-slate-950 transition ease-linear">
            <div className="rounded-full bg-gray-500 w-10 md:w-16 h-10 md:h-16 flex items-center justify-center">
              <img src="/chatIcon.png" alt="" className="w-8 md:w-12"/>
            </div>
            <p className="text-white text-md md:text-xl font-bold w-52">24-7 technical support</p>
          </div>
          <div className=" shadow-[0_0_8px_1px_white] rounded-lg h-40 md:h-72 p-8 flex flex-col justify-between hover:bg-slate-950 transition ease-linear">
            <div className="rounded-full bg-gray-500 w-10 md:w-16 h-10 md:h-16 flex items-center justify-center">
              <img src="/flashIcon.png" alt="" className="w-8 md:w-12"/>
            </div>
            <p className="text-white text-md md:text-xl font-bold text-wrap w-52">All models have a premium support</p>
          </div>
          <div className=" shadow-[0_0_8px_1px_white] rounded-lg h-40 md:h-72 p-8 flex flex-col justify-between hover:bg-slate-950 transition ease-linear">
            <div className="rounded-full bg-gray-500 w-10 md:w-16 h-10 md:h-16 flex items-center justify-center">
              <img src="/shieldIcon.png" alt="" className="w-8 md:w-12"/>
            </div>
            <p className="text-white text-md md:text-xl font-bold w-52">Absolute Confidedentality</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-8 items-around gap-20">
        <img src="/classicCar2.jpg" alt="classic Car" className="w-full sm:w-[80%] md:w-[40%] rounded-lg" />
        <div className="flex flex-col gap-10 md:gap-20">
          <p className="text-white text-5xl sm:text-7xl md:text-8xl w-20">
            Classic Vintage Cars
          </p>
          <p className="text-gray-500 text-xl sm:text-2xl md:text-3xl tracking-wide leading-10">
            Experience exotic car rentals from the brand known for award-winning customer service. Our goal is to meet your needs and exceed your expectations. We'll even deliver and collect your exotic vehicle at your convenience.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row p-8 gap-20 my-20">
        <div className="flex flex-col gap-20">
          <p className="text-white text-5xl sm:text-7xl md:text-8xl w-20">
            Superior Customer Service
          </p>
          <p className="text-gray-500 text-xl sm:text-2xl md:text-3xl tracking-wide leading-10">
          Discover the difference of superior customer service with a team dedicated to excellence at every touchpoint. From the moment you engage with us, our mission is to understand your unique needs and tailor our support accordingly.
          </p>
        </div>
        <img src="/classicCar4.jpeg" alt="classic Car" className="w-full sm:w-[80%] md:w-[40%] rounded-lg" />
      </div>
      <Footer/>
    </div>
    </>
  )
}