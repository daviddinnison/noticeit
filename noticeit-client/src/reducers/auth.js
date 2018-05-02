import { GET_AUTH_TEST } from '../actions/auth';

const initialState = {
  authTest: 'string from auth initial state'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_AUTH_TEST': {
      return Object.assign({}, state, {
        authTest: action.data
      });
    }
    default:
      return state;
  }
}
