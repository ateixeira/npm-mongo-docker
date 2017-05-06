import fetch from 'isomorphic-fetch';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

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
export function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function receiveUsers(json) {
    return {
        type: RECEIVE_USERS,
        users: json.map(child => child),
        receivedAt: Date.now()
    }
}

export function fetchUsers() {
    return dispatch => {
        dispatch(requestUsers())
        return fetch(API_USERS_URL)
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json)))
    }
}

export function shouldFetchUsers(state) {
    const users = state.usersList['users']
    if (!users) {
        return true
    } else if (users.isFetching) {
        return false
    } else {
        return true
    }
}

export function fetchUsersIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchUsers(getState())) {
            return dispatch(fetchUsers())
        }
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