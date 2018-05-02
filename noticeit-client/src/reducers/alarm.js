import { GET_ALARM_TEST } from '../actions/alarm';

const initialState = {
  alarmTest: 'the alarm initial state string'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALARM_TEST': {
      return Object.assign({}, state, {
        alarmTest: action.data
      });
    }
    default:
      return state;
  }
}
