import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAILURE } from './action.js';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function dataReducer(state = initialState, actio) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      };
    default:
      return state;
  }
}
