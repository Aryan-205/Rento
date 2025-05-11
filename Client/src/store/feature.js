// store/feature.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  render: false,
  cart:[],
  selectedCar:null
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
      state.cart = state.cart.filter(car=>car.id !== action.payload)
    },
    addCar: (state,action) => {
      if (!state.cart.find(car => car.id === action.payload.id)) {
        state.cart.push(action.payload)
      }
    },
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload
    }
  }
})

export const { toggleRender, setRender, removeCar, addCar } = featureSlice.actions;
export default featureSlice.reducer;