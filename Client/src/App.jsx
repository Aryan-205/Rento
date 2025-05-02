import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"

import Home from "./pages/Home.jsx"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/locations" element={<Locations/>} />
      </Routes>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
