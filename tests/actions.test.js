import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import mockDate from 'mockdate';

import { shouldFetchUsers, fetchUsers } from '../src/actions/actionCreators';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('async actions', () => {

    afterEach(() => {
        nock.cleanAll();
        mockDate.reset();
    })

    mockDate.set(Date.now());

    it('dispatches FETCH_USERS_SUCCESS when fetching users has been done successfully', () => {
        nock('http://localhost:3000/')
            .get('/api/users')
            .reply(200, [{"_id":"123456","username":"user.name","email":"mock@user.com","__v":0}])

        const expectedActions = [
            { type: "FETCH_USERS_REQUEST" },
            { 
                payload: {
                    users: [{"_id":"123456","username":"user.name","email":"mock@user.com","__v":0}] 
                },
                type: "FETCH_USERS_SUCCESS"
            }
        ]

        const store = mockStore({ users: [] })


        return store.dispatch(fetchUsers())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
        })

    })

});