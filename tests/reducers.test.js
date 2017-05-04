import { rootReducer, users } from '../src/reducers/index';
import { requestUsers, receiveUsers } from '../src/actions/actionCreators';

const DEFAULT_ACTION = { type: 'DEFAULT_ACTION' };


describe('rootReducer reducer', () => {
	const defaultState = () => rootReducer(undefined, DEFAULT_ACTION);

	it('exists', () => {
	    expect(defaultState()).toBeTruthy();
	});
});


describe('users reducer', () => {

	const defaultState = () => users(undefined, DEFAULT_ACTION);


  	it('sets a reasonable default', () => {
	    const state = defaultState();
	    expect(state).toEqual({
			isFetching: false,
			items: [],
	    });
  	})


    it('on REQUEST_USERS, sets isFetching to true', () => {
	    const action = requestUsers();
	    const nextState = users(defaultState(), action);
	    expect(nextState.isFetching).toBe(true);
    });


    it('on RECEIVE_USERS, unsets isFetching', () => {
	    const state = defaultState();
	    state.isFetching = true;

	    const action = receiveUsers([]);

	    const nextState = users(state, action);
	    expect(nextState.isFetching).toBe(false);
	});

	it('on RECEIVE_USERS, sets state.items to action.users', () => {
	    const state = defaultState();
	    const action = receiveUsers([]);

	    const nextState = users(state, action);

	    expect(nextState.items).toEqual(action.users);
	});

})