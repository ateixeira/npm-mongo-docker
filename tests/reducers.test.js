import { rootReducer, userReducer } from '../src/reducers/index';
import { fetchUsersRequest, fetchUsersSuccess, createUserRequest, createUserSuccess } from '../src/actions/actionCreators';

const DEFAULT_ACTION = { type: 'DEFAULT_ACTION' };


describe('rootReducer reducer', () => {
	const defaultState = () => rootReducer(undefined, DEFAULT_ACTION);

	it('exists', () => {
	    expect(defaultState()).toBeTruthy();
	});
});


describe('users reducer', () => {

	const defaultState = () => userReducer(undefined, DEFAULT_ACTION);


  	it('sets a reasonable default', () => {
	    const state = defaultState();
	    expect(state).toEqual({
	    	"createUserFailureMessage": undefined, 
	    	"isCreatingUser": false, 
	    	"isFetchingUser": false, 
	    	"list": []
	    });
  	})


    it('on FETCH_USERS_REQUEST, sets isFetchingUser to true', () => {
	    const action = fetchUsersRequest();
	    const nextState = userReducer(defaultState(), action);
	    expect(nextState.isFetchingUser).toBe(true);
    });

    it('on FETCH_USERS_SUCCESS, unsets isFetchingUser', () => {
	    const state = defaultState();
	    state.isFetchingUser = true;

	    const action = fetchUsersSuccess([]);

	    const nextState = userReducer(state, action);
	    expect(nextState.isFetchingUser).toBe(false);
	});

	it('on FETCH_USERS_SUCCESS, sets state.list to action.users', () => {
	    const state = defaultState();
	    const action = fetchUsersSuccess([]);

	    const nextState = userReducer(state, action);

	    expect(nextState.list).toEqual(action.payload.users);
	});


	it('on CREATE_USER_REQUEST, sets isCreatingUser to true', () => {
		const action = createUserRequest();
		const nextState = userReducer(defaultState(), action);
		
		expect(nextState.isCreatingUser).toBe(true);
	});


    it('on CREATE_USER_SUCCESS, unsets isCreatingUser', () => {
	    const state = defaultState();
	    state.isCreatingUser = true;

	    const action = createUserSuccess([]);

	    const nextState = userReducer(state, action);
	    expect(nextState.isCreatingUser).toBe(false);
	});

})