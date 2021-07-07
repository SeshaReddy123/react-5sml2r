export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchDataSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: {
    data
  }
});

export const fetchDataPending = () => {
  type: FETCH_DATA;
};

export const fetchDataFailure = error => ({
  type: FETCH_FAILURE,
  payload: { error }
});
