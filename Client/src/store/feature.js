// store/feature.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  render: false
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
    }
  }
})

export const { toggleRender, setRender } = featureSlice.actions;
export default featureSlice.reducer;