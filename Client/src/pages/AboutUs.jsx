import React from "react";
import Header from "../components/Header.jsx";
import CarPopupCard from "../components/CarPopupCard.jsx";

export default function AboutUs() {
  return (
    <>
      <Header/>
      <h1 className="text-white justify-self-center mt-40">hello from about us page</h1>
      <CarPopupCard/>
    </>
  )
}