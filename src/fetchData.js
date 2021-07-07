import { FETCH_DATA, FETCH_FAILURE, FETCH_SUCCESS } from './actions';
import axios from 'axios';

function fetchData() {
  return dispatch => {
    dispatch(fetchDatapending());
    axios
      .get('https://reqres.in/api/users')
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          throw response.error;
        }
        dispatch(fetchDataSuccess(response.data));
        return response.data;
      })
      .catch(error => {
        dispatch(fetchDataFailure(error));
      });
  };
}

export default fetchdata;
