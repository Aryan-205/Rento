import { useState } from "react"

function Admin() {
  const [brand,setBrand] = useState('')
  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [doors,setDoors] = useState('')
  const [price,setPrice] = useState('')
  const [carImage,setCarImage] = useState(null)
  const [password, setPassword] = useState('')

  const handleData = async() => {

    console.log()
    if(password === import.meta.env.VITE_PASS){

      const data = new FormData()
      data.append("brand", brand)
      data.append("name", name)
      data.append("type", type)
      data.append("doors", doors)
      data.append("price", price)
      data.append("carImage", carImage)

      await fetch(`${import.meta.env.VITE_BACKEND}/car/v1/admin`,{  
        method:'POST',
        body: data
      })
      setName('')
      setPrice('')
      setType('')
      setDoors('')
      setCarImage(null)

    } else {
      alert("Password is incorrect")
    }
  }


  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-black p-4 rounded-lg gap-4">
          <input 
            type="file"  
            placeholder="Image" 
            className="bg-black text-white border border-white p-4 rounded-lg"
            onChange={(e)=>setCarImage(e.target.files[0])
            }
            />
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
          <input 
            type="password"
            placeholder="Password"
            className="bg-black text-white border border-white p-4 rounded-lg"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleData} className="text-white text-lg p-4 px-8 rounded-3xl border border-white hover:text-black hover:bg-white active:opacity-80 duration-500">Upload</button>
        </div>
    </>
  )
}

export default Admin
