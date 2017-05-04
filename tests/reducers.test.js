import { rootReducer, users } from '../src/reducers/index';

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
  	
})