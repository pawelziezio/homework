import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunkMiddleware from 'redux-thunk'

import counterReducer from './state/smartcounter/reducer'
import usersReducer from './state/users/reducer'

const reducer = combineReducers({
  counter: counterReducer,
  usersData: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware // lets us dispatch() functions (thunks) in addition to objects with 'type' attribute
  ),
  persistState(['counter'])
)

const store = createStore(reducer, enhancer);

export default store