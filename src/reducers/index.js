import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {
  FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,
  CREATE_USER_REQUEST, CREATE_USER_SUCCESS
} from '../actions/actionCreators'

// INITIAL STATE
const authInitialState = {
    token: null,
    locale: 'en',
    isAuthenticated: false,
    user: {
      permissions: []
    },
    error: null
};

const modalInitialState = {
    modalType: null,
    modalProps: {},
    showModal: false
};

const userInitialState = {
    list: [],
    isCreatingUser: false,
    isFetchingUser: false,
    createUserFailureMessage: undefined
};

// MODAL
function modal(state = modalInitialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                modalType: action.modalType,
                modalProps: action.modalProps,
                showModal: action.showModal
            }
        case 'HIDE_MODAL':
            return modalInitialState
        default:
            return state
    }
}


// AUTH
export function auth(state = authInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    } 
}


// USER
export function userReducer(state = userInitialState, action) {
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
    auth,
    modal,
    routing: routerReducer
})

export default rootReducer