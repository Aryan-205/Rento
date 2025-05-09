import { configureStore } from '@reduxjs/toolkit'
import featureSlice from './feature.js'

  const store = configureStore({
  reducer:{
    feature:featureSlice
  } 
})
export default store