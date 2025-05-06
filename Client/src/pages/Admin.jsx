import React, { useEffect, useState } from "react"

function Admin() {
  const [brand,setBrand] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [doors,setDoors] = useState('')
  const [price,setPrice] = useState('')
  const [form, setForm] = useState([])

  const handleData = () => {
    setForm({brand, name, type, doors, price})
  }

  useEffect(()=>{
    const response = fetch('http://localhost:5173/admin',{brand,name,type,doors,price})
    console.log(response)
  },[])

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black p-4 rounded-lg gap-4">
          <input 
            type="file"  
            placeholder="Image" 
            className="bg-black text-white border border-white p-4 rounded-lg"/>
          <input 
            type="text" 
            placeholder="Brand" 
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={brand}
            onChange={(e)=>setBrand(e.target.value)}/>
          <input 
            type="text" 
            placeholder="Name of car" 
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
          <input 
            type="number" 
            placeholder="Door" 
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={doors}
            onChange={(e)=>setDoors(e.target.value)}
            />
          <input 
            type="number" 
            placeholder="Price" 
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
          <input 
            type="text"
            placeholder="Type of"
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            />
            <button onClick={handleData} className="text-white text-lg p-4 px-8 rounded-3xl border border-white hover:text-black hover:bg-white active:opacity-80 duration-500">Upload</button>
        </div>
    </>
  )
}

export default Admin
