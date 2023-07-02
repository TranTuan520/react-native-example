import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit'
import * as counter from 'features/counter/data'

const slices = [counter]

const reducer: ReducersMapObject = {}

slices.forEach(item => {
  if (item.slice) {
    Object.assign(reducer, { [item.slice.name]: [item.slice.reducer] })
  }
})

export default combineReducers({
  [counter.slice.name]: counter.slice.reducer,
})
