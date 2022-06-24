import baseUri, { proxyServer, apiKey } from '../../utils/api_config';

// Actions
const UPDATE_DATA = 'capstone3-jobseek-reedApi/jobs/UPDATE_DATA';
const CLEAR_DATA = 'capstone3-jobseek-reedApi/jobs/CLEAR_DATA';

// Actions creator
export const updateData = (data, keywords) => ({
  type: UPDATE_DATA,
  data,
  keywords,
});

export const clearData = () => ({
  type: CLEAR_DATA,
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
      .then((json) => dispatch(updateData(json, keywords)));
  }
);

// Reducer
const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return { ...action.data, keywords: action.keywords };
    case CLEAR_DATA:
      return {};
    default:
      return state;
  }
};

export default jobsReducer;
