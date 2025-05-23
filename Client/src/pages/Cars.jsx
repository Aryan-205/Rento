import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import { useSelector, useDispatch } from "react-redux";
import { setRender } from "../store/feature";
import CarPopupCard from "../components/CarPopupCard";
import { useLocation } from "react-router-dom";

export default function Cars() {
  const render = useSelector((state) => state.feature.render);
  const dispatch = useDispatch();

  const [cars, setCars] = useState([])
  const [card, setCard] = useState('')

  const locate = useLocation()
  const brand = locate.state?.brandChosen

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const url = brand 
            ? `${import.meta.env.VITE_BACKEND}/car/v1/cars?brand=${brand}`
            : `${import.meta.env.VITE_BACKEND}/car/v1/cars`
        
        const response = await fetch(url);
        const cars = await response.json();
        setCars(cars)
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, [brand]);

  return (
    <>
      <Header />
      <div>
        <img src="/porschegt3rs.jpg" alt="" className="object-fill" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-8 -mt-24 ">
        {
          cars.map((car)=>
            <CarCard car={car} key={car._id} onSelect={(selected) => setCard(selected)}/>
          )
        }
      </div>
      {render && card && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => dispatch(setRender(false))}
          ></div>
          <div className="relative z-50" onClick={(e) => e.stopPropagation()}>
            <CarPopupCard card={card}/>
          </div>
        </div>
      )}
    </>
  );
}