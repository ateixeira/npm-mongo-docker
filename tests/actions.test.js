import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import mockDate from 'mockdate';

import { shouldFetchUsers, fetchUsers } from '../src/actions/actionCreators';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('sync actions', () => {
    it('shouldFetchUsers returns true when users are not yet loaded on usersList', () => {
        const state = {
            usersList: {
            },
        };

        expect(shouldFetchUsers(state)).toEqual(true);
    });


  it('shouldFetchUsers returns false when isFetching is true', () => {
    const state = {
        usersList: {
            users: {
                isFetching: true,
            },
        },
    };

    expect(shouldFetchUsers(state)).toBe(false);
  });

});



describe('async actions', () => {

    afterEach(() => {
        nock.cleanAll();
        mockDate.reset();
    })

    mockDate.set(Date.now());

    it('creates RECEIVE_USERS when fetching users has been done', () => {
        nock('http://localhost:3000/')
            .get('/api/users')
            .reply(200, [{}, {}])

        const expectedActions = [
            { type: "REQUEST_USERS" },
            { 
                type: "RECEIVE_USERS", 
                receivedAt: Date.now(), //mockDate 
                users: [{}, {}] 
            }
        ]

        const store = mockStore({ todos: [] })


        return store.dispatch(fetchUsers())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
        })

    })

});