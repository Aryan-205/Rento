import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Booking() {

  const navigate = useNavigate()

  const cart = useSelector((state) => state.feature.cart);
  const [cars, setCars] = useState([]);

  let total = 0;
  for (let i = 0; i < cars.length; i++) {
    total = cars[i].price + total ;
  }

  useEffect(() => {
    setCars(cart);
  }, [cart]);

  if (cars.length === 0) {
    return (
      <>
        <Header />
        <div className="mt-20 p-8">
          <p className="text-gray-500 text-xl ">
            No car selected. Please go back and choose a car to book.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="h-screen mt-10 p-8 space-y-4">
        <div className=" border border-white bg-black p-4 rounded-lg">
          <p className="text-white text-3xl text-center">Cars List</p>
          {
            cars.map(car => 
              <div className="border-b border-white p-2">
                <div className="flex justify-between text-white text-xl">
                  <p>{car.name}</p>
                  <p>{car.price} <span className="text-gray-500">$</span></p>
                </div>
                <p className="text-gray-500 text-xl">{car.location}</p>
              </div>
            )
          }
          <p className="text-white text-3xl justify-self-end p-2">Total: {total}$ /Day</p>
          <div className="flex justify-center items-center">
            <button className="text-white border border-white rounded-lg p-2 hover:bg-white hover:text-black active:opacity-60 transition duration-300 ease-in-out" onClick={()=>navigate('/payment',{state:{Total:total}})}>Confirm Booking</button>
          </div>
        </div>
        <div className="grid gap-8">
            {cars.map((car) => (
              <BookingCard key={car._id} card={car} />
            ))}
        </div>
      </div>
    </>
  );
}