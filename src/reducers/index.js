import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  SET_FOO, UNSET_FOO, RECEIVE_USERS, REQUEST_USERS
} from '../actions/actionCreators'


// FOO
export function foo(state = "bar", action) {
  switch (action.type) {
    case SET_FOO:
      return action.foo
    case UNSET_FOO:
      return ""
    default:
      return state
  }
}


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
  foo,
  usersList,
  routing: routerReducer
})

export default rootReducer