import { rootReducer } from '../src/reducers/index';

const DEFAULT_ACTION = { type: 'DEFAULT_ACTION' };


describe('rootReducer reducer', () => {
	const defaultState = () => rootReducer(undefined, DEFAULT_ACTION);

	it('exists', () => {
	    expect(defaultState()).toBeTruthy();
	});
});