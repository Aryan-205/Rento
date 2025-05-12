import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCar } from "../store/feature";

export default function CarPopupCard({ card }) {

  const [showNotification, setShowNotification] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAddToList = () => {
    dispatch(addCar(card));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const onClickBookNow = () => {
    dispatch(addCar(card));
    navigate("/booking");
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="flex flex-col rounded-lg border border-white p-4 bg-black gap-2">
        <img src={`${card.carImage}`} alt="" className="w-96 h-auto" />
        <div className="flex justify-between">
          <div>
            <p className="text-white text-2xl">{card.name}</p>
            <p className="text-white text-2xl items-end">Price:</p>
            <p className="text-gray-500 text-lg">Brand</p>
            <p className="text-gray-500 text-lg">Doors: </p>
            <p className="text-gray-500 text-lg">Type: </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-black text-2xl">.</p>
            <p className="text-gray-500 text-lg">
              <span className="text-white">${card.price}</span>/Day
            </p>
            <p className="text-gray-500 text-lg ">{card.brand}</p>
            <p className="text-gray-500 text-lg">{card.doors}</p>
            <p className="text-gray-500 text-lg">{card.type}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="text-white border border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out active:opacity-60"
            onClick={onClickAddToList}
          >
            Add to List
          </button>
          <button
            className="text-white border border-white p-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out active:opacity-60"
            onClick={onClickBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
      {showNotification && (
        <div className="absolute top-4 right-4 border border-green-500 bg-black px-4 py-2 rounded-lg shadow-lg z-50">
          <p className="text-green-500 text-xl">Car added to List</p>
        </div>
      )}
    </div>
  );
}