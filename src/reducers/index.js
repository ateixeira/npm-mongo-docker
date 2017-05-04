import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  RECEIVE_USERS, REQUEST_USERS
} from '../actions/actionCreators'


// USERS
export function users(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.users,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function usersList(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
        case REQUEST_USERS:
            return Object.assign({}, state, {
                ["users"]: users(state["users"], action)
            })
        default:
            return state
    }
}

// ROOT REDUCER
export const rootReducer = combineReducers({
  usersList,
  routing: routerReducer
})

export default rootReducer