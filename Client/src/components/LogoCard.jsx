import React, { useEffect, useState } from "react";

export default function LogoCard({i, brand}){

  //const [cars, setCars] = useState([])

  // useEffect(()=>{
  //   const fetchBrand = async () => {
  //     const response = await fetch('http://localhost:8000/car/v1/cars',{
  //       brand
  //     })
  //     const allCars = response.json()
  //     setCars(allCars)
  //     console.log(cars)
  //   }
  //   fetchBrand()
  // },[])
  return (
    <>
      <div className="w-18 h-18 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col justify-center items-center border border-white rounded-xl hover:scale-125 transition ease-in-out duration-500 cursor-pointer p-2">
        <img src={`/${i}.png`} alt="ferrariLogo" className="w-8 md:w-12 lg:w-16 h-auto"/>
      </div>
    </>
  )
}