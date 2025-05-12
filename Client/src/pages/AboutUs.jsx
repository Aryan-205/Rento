import Header from "../components/Header.jsx";
import LogoCard from "../components/LogoCard.jsx";
import logos from "./home/logo.js";
import Footer from "../components/Footer.jsx";

export default function AboutUs() {
  return (
    <>
    <div>
      <Header/>
      <div className="flex flex-col items-center gap-8 p-8 mt-20">
        <h1 className="text-white text-3xl md:text-5xl text-bold font-serif">Experience the Art of Driving - <span className="text-gray-400"> Redefined.</span></h1>
        <p className="text-white text-xl w-full md:text-3xl md:w-[80%]">At <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-600 to-black font-bold">Rento</span>, we believe that driving should be more than just a means of transport—it should be an experience. As India's Premier Luxury car rental service, we bring the world's most coveted automotive marques to your fingertips. Whether it's the raw power of a Ferrari, the timeless elegance of a Rolls-Royce, or the fierce presence of a Lamborghini, we make Luxury accessible on your terms.</p>
      </div>
      <div className="p-8">
        <h1 className="text-white text-3xl md:text-5xl my-8">Our Fleet</h1>
        <p className="text-gray-300 text-md md:text-xl">Our meticulously curated fleet features brands that define performance, prestige, and perfection:</p>
        <div className="flex flex-wrap gap-4 justify-around my-16">
          {logos.map((img)=>
            <div className="grid ">
              <LogoCard img={img} key={img.id}/>
              <p className="text-white text-center my-4 text-xl" key={img.id}>{img.brand}</p>
            </div>
          )}
        </div>
        <p className="text-gray-300 text-md md:text-xl">Each vehicle is maintained to the highest standard and delivered with unmatched attention to detail.</p>
      </div>
      <div className="p-8">
        <h1 className="text-gray-300 text-3xl md:text-5xl my-8">Where We Operate</h1>
        <p className="text-gray-300 text-md md:text-xl">With availability across India's key metros and emerging hubs, we are where you need us:</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 justify-items-center my-16">

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Jaipur.jpg" alt="Jaipur" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Jaipur</p>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Delhi.jpg" alt="Delhi" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Delhi</p>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Chandigarh.jpg" alt="Chandigarh" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Chandigarh</p>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Siliguri.webp" alt="Siliguri" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Siliguri</p>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Banglore.webp" alt="Bengaluru" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Bengaluru</p>
          </div>

          <div className="relative rounded-lg overflow-hidden border border-white group inline-block">
            <img src="/Mumbai.webp" alt="Mumbai" className="w-72 hover:scale-125 transition duration-300 ease-in-out" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-3xl font-bold">Mumbai</p>
          </div>
        </div>
        <p className="text-gray-300 text-md md:text-xl">Whether it's a weekend escape, a wedding, a corporate appearance, or just the need to feel something extraordinary — we are at your service.</p>
      </div>
      <div className="p-8">
        <h1 className="text-gray-300 text-3xl md:text-5xl my-8">Why Choose Us</h1>
        <div className="flex flex-wrap gap-8 justify-between my-16">
          <div className="flex flex-col justify-between border border-white rounded-lg w-96 h-72 p-4">
            <p className="text-white text-3xl font-bold mt-4">Premium Cars, Sensible Pricing</p>
            <p className="text-white text-xl">Drive world-class luxury without hidden costs or inflated premiums.</p>
          </div>
          <div className="flex flex-col justify-between border border-white rounded-lg w-96 h-72 p-4">
            <p className="text-white text-3xl font-bold mt-4">Unparalleled Service</p>
            <p className="text-white text-xl">From booking to return, expect concierge-level support and reliability.</p>
          </div>
          <div className="flex flex-col justify-between border border-white rounded-lg w-96 h-72 p-4">
            <p className="text-white text-3xl font-bold mt-4">Tailored Experiences</p>
            <p className="text-white text-xl">Whether it's self-drive or chauffeured elegance, our offerings flex to your preferences.</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-gray-300 text-3xl md:text-5xl my-8">Our Promise</h1>
        <p className="text-white text-lg md:text-2xl">Luxury isn't just about the car — it's about the entire experience. From the first click to the final kilometer, our team is dedicated to delivering a seamless, stylish, and unforgettable journey.</p>
      </div>
      <Footer/>
    </div> 
    </>
  )
}