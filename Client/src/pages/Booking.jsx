import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";
import { useSelector } from "react-redux";

export default function Booking() {
  const cart = useSelector((state) => state.feature.cart);
  const [cars, setCars] = useState([]);

  
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
      <div className="grid gap-8 h-screen p-8 pt-20">
          {cars.map((car) => (
            <BookingCard key={car._id} card={car} />
          ))}
      </div>
    </>
  );
}