// API
const baseUri = 'https://www.reed.co.uk/api/1.0/';
const proxyServer = 'https://jau-cors-anywhere-reed.herokuapp.com/';

// Actions
const SHOW_JOBS = 'capstone3-jobseek-reedApi/jobs/SHOW_JOBS';

// Actions creator
export const showJobs = (data) => ({
  type: SHOW_JOBS,
  data,
});

export const fetchJobs = (keywords) => (
  (dispatch) => {
    fetch(`${proxyServer}${baseUri}search?keywords=${keywords}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${btoa('cdf3a52c-c542-43fb-b343-972714ae2e4f:')}`,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(showJobs(json)));
  }
);

// Reducer
const jobsReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOW_JOBS:
      return action.data;
    default:
      return state;
  }
};

export default jobsReducer;
