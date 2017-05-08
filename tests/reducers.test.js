import { rootReducer, userReducer } from '../src/reducers/index';
import { fetchUsersRequest, fetchUsersSuccess } from '../src/actions/actionCreators';

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


    it('on REQUEST_USERS, sets isFetching to true', () => {
	    const action = fetchUsersRequest();
	    const nextState = userReducer(defaultState(), action);
	    expect(nextState.isFetchingUser).toBe(true);
    });


    it('on RECEIVE_USERS, unsets isFetching', () => {
	    const state = defaultState();
	    state.isFetchingUser = true;

	    const action = fetchUsersSuccess([]);

	    const nextState = userReducer(state, action);
	    expect(nextState.isFetchingUser).toBe(false);
	});

	it('on RECEIVE_USERS, sets state.items to action.users', () => {
	    const state = defaultState();
	    const action = fetchUsersSuccess([]);

	    const nextState = userReducer(state, action);

	    expect(nextState.items).toEqual(action.users);
	});

})