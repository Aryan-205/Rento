import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCar } from "../store/feature";

export default function Booking() {
  const dispatch = useDispatch();
  const selectedCar = useSelector((state) => state.feature.selectedCar);
  const cart = useSelector((state) => state.feature.cart);
  const [cars, setCars] = useState([]);

  const total = cart.reduce((sum, car) => sum + Number(car.price), 0);

  useEffect(() => {
    if (selectedCar && !cart.find((car) => car.id === selectedCar.id)) {
      setCars([selectedCar]);
    } else {
      setCars(cart);
    }

    dispatch(setSelectedCar(null));
  }, [selectedCar, cart, dispatch]);

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
      <div className="flex gap-8 h-screen p-8 pt-20">
        <div>
          {cars.map((car) => (
            <BookingCard key={car._id} card={car} />
          ))}
        </div>
        <div className="bg-white/10 p-4 text-white rounded-lg mt-6 w-full">
          <p className="text-xl">Total Booking Price: ${total} / day</p>
        </div>
      </div>
    </>
  );
}