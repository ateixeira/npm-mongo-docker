import { shouldFetchUsers, fetchUsers } from '../src/actions/actionCreators';

describe('sync actions', () => {
  it('shouldFetchUsers returns true when users are not yet loaded on usersList', () => {
    const state = {
      usersList: {
      },
    };

    expect(shouldFetchUsers(state)).toEqual(true);
  });

});