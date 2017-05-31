import { FETCH_USERS } from './actionTypes'

const initialState = {
  users: [ ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}