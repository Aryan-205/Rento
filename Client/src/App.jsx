import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import Home from "./pages/home/Home.jsx"
import Deals from "./pages/Deals.jsx"
import Cars from "./pages/Cars.jsx"
import Locations from "./pages/Locations.jsx"
import Admin from "./pages/Admin.jsx"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/deals" element={<Deals/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
