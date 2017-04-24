import fetch from 'isomorphic-fetch';

export const SET_FOO = 'SET_FOO';
export const UNSET_FOO = 'UNSET_FOO';


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