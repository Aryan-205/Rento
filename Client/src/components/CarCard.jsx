import { useDispatch } from "react-redux";
import { setRender} from "../store/feature.js";

export default function CarCard({car, onSelect}){
  
  const dispatch = useDispatch()
  const handleClick = () => {
    onSelect(car);
    dispatch(setRender(true));
  };

  return (
    <>
      <div className="p-2 border border-white rounded-xl hover:scale-110 transition ease-in-out duration-500 cursor-pointer gap-2 flex flex-col" onClick={handleClick}>
        <img src={`${car.carImage}`} alt="" className="h-auto rounded-lg "/>
        <p className="text-white text-xl">{car.name}</p>
        <p className="text-white">{car.price}$ /Day</p>
        <p className="text-gray-500">{car.type}</p>
      </div>
    </>
  )
}