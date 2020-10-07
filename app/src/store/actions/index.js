import axios from "axios";

export const FETCH_JOBS_START = "FETCH_JOBS_START";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
// action creator that is going to do some async stuff
export const fetchJobs = (url) => (dispatch) => {
  dispatch({ type: FETCH_JOBS_START });
  axios
    .get(url)
    .then((res) => {
      // res.data
      dispatch({ type: FETCH_JOBS_SUCCESS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
