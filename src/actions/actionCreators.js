import fetch from 'isomorphic-fetch';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// Setting variables to use absolute urls on test fetches
// Issue: http://stackoverflow.com/a/37968027/955183
const IS_TESTING = process.env.NODE_ENV === 'test';
const API_USERS_URL = `${IS_TESTING ? 'http://localhost:3000' : ''}/api/users`;

// MODALS
export function showModal(modalType, modalProps, showModal=true) {
  return{
    type: SHOW_MODAL,
    modalType,
    modalProps,
    showModal
  }
}

export function hideModal(modalProps, showModal=false) {
  return {
    type: HIDE_MODAL,
    modalProps,
    showModal
  }
}


// USERS
  // --> GET
  export function fetchUsersRequest() {
      return {
          type: FETCH_USERS_REQUEST
      };
  }

  export function fetchUsersSuccess(users) {
      return {
          type: FETCH_USERS_SUCCESS,
          payload: { users }
      };
  }

  export function fetchUsersFailure(err) {
      return {
          type: FETCH_USERS_FAILURE,
          payload: { err }
      };
  }

  export function fetchUsers() {
      return dispatch => {
          dispatch(fetchUsersRequest());
          return fetch(API_USERS_URL)
              .then(response => response.json())
              .then(json => dispatch(fetchUsersSuccess(json)))
                  .catch(err => dispatch(fetchUsersFailure(err)))
      }
  }


    // --> POST

    export function createUserRequest() {
        return {
            type: CREATE_USER_REQUEST
        }
    }

    export function createUserSuccess(user) {
        return {
            type: CREATE_USER_SUCCESS,
            payload: { user }
        }
    }

    export function createUserFailure(err) {
        return {
            type: CREATE_USER_FAILURE,
            payload: { err }
        }
    }

    export function createUser(user_obj) {
        return dispatch => {
            dispatch(createUserRequest())
            return fetch(API_USERS_URL, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user_obj)
            }).then(response => response.json())
              .then(json => dispatch(createUserSuccess(json)))
                .catch(err => dispatch(createUserFailure(err.response.data)))
        }
    }

    // AUTH

    function requestLogin(creds) {
        return {
            type: LOGIN_REQUEST,
            isFetching: true,
            isAuthenticated: false,
            creds
        }
    }

    function receiveLogin(user) {
        return {
            type: LOGIN_SUCCESS,
            isFetching: false,
            isAuthenticated: true,
            id_token: user.id_token
        }
    }

    function loginError(message) {
        return {
            type: LOGIN_FAILURE,
            isFetching: false,
            isAuthenticated: false,
            message
        }
    }
    