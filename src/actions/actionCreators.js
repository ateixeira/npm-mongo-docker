import fetch from 'isomorphic-fetch';

export const SET_FOO = 'SET_FOO';
export const UNSET_FOO = 'UNSET_FOO';

export const REQUEST_USERS = 'REQUEST_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';


// FOO
export function setFoo(foo) {
  return {
    type: SET_FOO,
    foo
  }
}

export function unsetFoo() {
  return {
    type: UNSET_FOO
  }
}

// USERS
export function requestUsers() {
  return {
    type: REQUEST_USERS
  }
}

export function receiveUsers(json) {
  return {
    type: RECEIVE_USERS,
    users: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchUsers() {
  	return dispatch => {
	    dispatch(requestUsers())
	    return fetch('/users')
			.then(response => response.json())
			.then(json => dispatch(receiveUsers(json)))
  	}
}

function shouldFetchUsers(state) {
	const users = state.usersList
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