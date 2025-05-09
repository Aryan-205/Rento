import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CarCard from "../components/CarCard";
import { useSelector, useDispatch } from "react-redux";
import { setRender } from "../store/feature";
import CarPopupCard from "../components/CarPopupCard";

export default function Cars() {
  const render = useSelector((state) => state.feature.render);
  const dispatch = useDispatch();

  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:8000/car/v1/cars');
        const cars = await response.json();
        setCars(cars)
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      <Header />
      <div>
        <img src="/porschegt3rs.jpg" alt="" className="object-fill" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 p-8 -mt-24 ">
        {
          cars.map((car)=>
            <CarCard name={car.name} price={car.price} carImage={car.carImage} key={car._id}/>
          )
        }
      </div>
      {render && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => dispatch(setRender(false))}
          ></div>
          <div className="relative z-50" onClick={(e) => e.stopPropagation()}>
            <CarPopupCard/>
          </div>
        </div>
      )}
    </>
  );
}