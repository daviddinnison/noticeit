// react native
import { Actions } from 'react-native-router-flux';

export const GET_ALARM_TEST = 'GET_ALARM_TEST';
export const getAlarmTest = data => ({
  type: GET_ALARM_TEST,
  data
});

export const getAlarm = userInput => dispatch => {
  dispatch(getAlarmTest(userInput));
};
