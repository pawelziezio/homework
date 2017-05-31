import { FETCH_USERS } from './actionTypes'

export const fetchUsers = () => dispatch => {

  fetch(
    process.env.PUBLIC_URL + '/data/users.json'
  ).then(function (response) {
    return response.json()
  }).then(function (usersArray) {
    dispatch({type: FETCH_USERS, users: usersArray})
  }).catch(function (ex) {
    console.log('parsing failed', ex)
  })
}