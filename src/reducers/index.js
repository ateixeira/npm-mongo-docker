import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS
} from '../actions/actionCreators'

// INITIAL STATE
const initialState = {
    list: [],
    isCreatingUser: false,
    isFetchingUser: false,
    createUserFailureMessage: undefined
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isFetchingUser: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: payload.users,
                isFetchingUser: false
            };
        case CREATE_USER_REQUEST:
            return {
                ...state,
                isCreatingUser: true
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                list: [...state.list, payload.user],
                isCreatingUser: false,
                createUserFailureMessage: undefined
            };
        default:
            return state;
    } 
}


// ROOT REDUCER
export const rootReducer = combineReducers({
  userReducer,
  routing: routerReducer
})

export default rootReducer