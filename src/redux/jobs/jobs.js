import baseUri, { proxyServer, apiKey } from '../../utils/api_config';

// Actions
const UPDATE_DATA = 'capstone3-jobseek-reedApi/jobs/UPDATE_DATA';

// Actions creator
export const updateData = (data) => ({
  type: UPDATE_DATA,
  data,
});

export const fetchJobs = (keywords) => (
  (dispatch) => {
    fetch(`${proxyServer}${baseUri}search?keywords=${keywords}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${btoa(`${apiKey}:`)}`,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(updateData(json)));
  }
);

// Reducer
const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return action.data;
    default:
      return state;
  }
};

export default jobsReducer;
