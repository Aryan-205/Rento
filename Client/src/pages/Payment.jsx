import { useNavigate } from "react-router-dom"

export default function Payment(){

  const navigate = useNavigate()

  return (
    <>
    <div className="h-screen flex justify-center items-center">
      <div className="border border-white text-white rounded-lg p-2 grid justify-center">
        <p className="text-4xl p-4">This is just a demo Project</p>
        <button className="border border-white p-1 rounded-lg" onClick={()=>navigate('/')}>GO BACK</button>
      </div>
    </div>
    </>
  )
}