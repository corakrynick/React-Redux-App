import { FETCH_JOBS_START, FETCH_JOBS_SUCCESS } from "../actions";

const initialState = {
  jobs: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload
      };
    default:
      return state;
  }
};

