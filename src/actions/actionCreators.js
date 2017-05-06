import fetch from 'isomorphic-fetch';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

// Setting variables to use absolute urls on test fetches
// Issue: http://stackoverflow.com/a/37968027/955183
const IS_TESTING = process.env.NODE_ENV === 'test';
const API_USERS_URL = `${IS_TESTING ? 'http://localhost:3000' : ''}/api/users`;


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
        }).then(response => dispatch(createUserSuccess(response.data)))
            .catch(err => dispatch(createUserFailure(err.response.data)))
    }
}