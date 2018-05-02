// react native
import { Actions } from 'react-native-router-flux';

export const GET_AUTH_TEST = 'GET_AUTH_TEST';
export const getAuthTest = data => ({
  type: GET_AUTH_TEST,
  data
});

export const getAuth = userInput => dispatch => {
  dispatch(getAuthTest(userInput));
};
