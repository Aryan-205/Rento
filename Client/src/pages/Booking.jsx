import React from "react";
import Header from "../components/Header";
import BookingCard from "../components/BookingCard";
import { useLocation } from "react-router-dom";

export default function Booking(){
  const locate = useLocation()
  const card = locate.state?.card
  
  return (
    <>
      <Header/>
      <div className="flex gap-8 h-screen p-8 pt-20">
        <div>
          <BookingCard card={card}/>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}