import React from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";

export default function Booking(){
  return (
    <>
      <Header/>
      <div className="flex gap-8 h-screen p-8 pt-20">
        <div>
          <BookingCard/>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}