import fetch from 'isomorphic-fetch';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

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