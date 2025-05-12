import Header from "../../components/Header.jsx";

import locations from "./location.js";

export default function Location() {
  return (
    <>
    <Header/>
    <div className="px-6 py-16 text-white bg-black min-h-screen mt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Where to Find Us</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Step into luxury — our premium lounges and rental points are located in India's finest cities. Find the nearest Rento hub and elevate your travel experience.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={`/${location.img}`} alt="" />
            <h2 className="text-2xl font-semibold mb-2">{location.name}</h2>
            <p className="text-gray-300">{location.address}</p>
            <p className="text-gray-500 mt-2 text-sm">Open Daily: 10 AM – 10 PM</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}