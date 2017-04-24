import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  SET_FOO, UNSET_FOO
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


export const rootReducer = combineReducers({
  foo,
  routing: routerReducer
})

export default rootReducer