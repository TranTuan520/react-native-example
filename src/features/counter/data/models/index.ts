import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'shared/types'

const initialState = {
  currentCount: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: state => {
      state.currentCount = state.currentCount + 1
    },
    decrease: state => {
      state.currentCount = state.currentCount - 1
    },
  },
})

const counterState = (state: RootState) => state.counter

export const selectCurrentCount = createSelector(counterState, state => {
  return state.currentCount
})

export default counterSlice
