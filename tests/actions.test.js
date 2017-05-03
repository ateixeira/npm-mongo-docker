import { shouldFetchUsers, fetchUsers } from '../src/actions/actionCreators';

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