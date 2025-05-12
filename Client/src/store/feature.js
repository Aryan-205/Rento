// store/feature.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  render: false,
  cart:[]
}

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {
    toggleRender: (state) => {
      state.render = !state.render;
    },
    setRender: (state, action) => {
      state.render = action.payload;
    },
    removeCar: (state,action) => {
      state.cart = state.cart.filter(car=>car._id !== action.payload)
    },
    addCar: (state, action) => {
      const exists = state.cart.find(car => car._id === action.payload._id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    selectedLocation: (state,action)=>{
      const { carId, location} = action.payload
      const car = state.cart.find(c => c._id == carId)
      if(car){
        car.location = location
      }
    }
  }
})

export const { toggleRender, setRender, removeCar, addCar, selectedLocation } = featureSlice.actions;
export default featureSlice.reducer;