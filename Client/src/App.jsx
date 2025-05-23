import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import Home from "./pages/home/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Cars from "./pages/Cars.jsx"
import Locations from "./pages/location/Locations.jsx"
import Admin from "./pages/Admin.jsx"
import Booking from "./pages/Booking.jsx"
import Payment from "./pages/Payment.jsx"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/payment" element={<Payment/>} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router}/>
  )
}

export default App
