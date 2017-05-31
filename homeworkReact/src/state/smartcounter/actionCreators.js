import {
  INCREMENT,
  DECREMENT,
  RESET
} from './actionTypes'

export const increment = (value = 1) => ({
  type: INCREMENT,
  value: value
})

export const decrement = (value = 1) => ({
  type: DECREMENT,
  value: value
})

export const reset = (value = 1) => ({
  type: RESET,
  value: value
})

