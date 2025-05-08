import React from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";

export default function Booking(){
  return (
    <>
      <Header/>
      <div>
        <BookingCard/>
        <h1 className="text-3xl bg-red-500">hello</h1>
      </div>

    </>
  )
}