import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import Home from "./pages/home/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Cars from "./pages/Cars.jsx"
import Locations from "./pages/Locations.jsx"
import Admin from "./pages/Admin.jsx"
import Booking from "./pages/Booking.jsx"
import CarPreview from "./pages/CarPreview.jsx"

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
        <Route path="/carPreview" element={<CarPreview/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
