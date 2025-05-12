import React, { useEffect, useState } from "react";
import locations from "../pages/location/location";
import { removeCar, selectedLocation } from "../store/feature";
import { useDispatch } from "react-redux";

export default function BookingCard({ card }) {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("");
  const city = locations.find((u) => u.name === selectedCity);

  useEffect(() => {
    if (card.location) {
      setSelectedCity(card.location);
    }
  }, [card.location]);

  return (
    <div className="bg-black border border-white w-full rounded-lg p-6 relative">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full">
          <img
            src={`${card.carImage}`}
            alt="Car"
            className="rounded-xl w-full h-full object-cover border border-white/20 shadow-lg"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-between">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-white text-2xl">{card.name}</p>
              <p className="text-gray-500 text-lg">Brand</p>
              <p className="text-gray-500 text-lg">Door: </p>
              <p className="text-gray-500 text-lg">Type: </p>
              <p className="text-white text-2xl mt-2">Price:</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="text-black text-2xl">.</p>
              <p className="text-gray-500 text-lg">{card.brand}</p>
              <p className="text-gray-500 text-lg">{card.doors}</p>
              <p className="text-gray-500 text-lg">{card.type}</p>
              <p className="text-gray-500 text-lg mt-2">
                <span className="text-white">{card.price}</span>/Day
              </p>
            </div>
          </div>

          <select
            name="location"
            className="bg-black text-white border border-white rounded-md p-2"
            onChange={(e) => {
              setSelectedCity(e.target.value) 
              dispatch(selectedLocation({ carId: card._id, location: e.target.value }));
            }}
            value={selectedCity || card.location || ""}
          >
            <option value="">Select City</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Siliguri">Siliguri</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          {city && (
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg mt-2">
              <img
                src={`/${city.img}`}
                alt={city.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold text-white">{city.name}</h2>
              <p className="text-gray-300">{city.address}</p>
              <p className="text-gray-500 mt-2 text-sm">Open Daily: 10 AM – 10 PM</p>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <button
          className="py-2 px-4 text-black bg-white rounded-full text-xl font-bold absolute top-2 right-2 hover:scale-110"
          onClick={() => dispatch(removeCar(card._id))}
        >
          X
        </button>
      </div>
    </div>
  );
}