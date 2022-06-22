// API
const baseUri = 'https://www.reed.co.uk/api/1.0/';
const proxyServer = 'https://jau-cors-anywhere-reed.herokuapp.com/';

// Actions
const ADD_DATA = 'capstone3-jobseek-reedApi/aggregate/ADD_DATA';
const CLEAR_DATA = 'capstone3-jobseek-reedApi/aggregate/CLEAR_DATA';

// Actions creator
export const addData = (data, keywords) => ({
  type: ADD_DATA,
  data,
  keywords,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const aggregateFetch = (keywords) => (
  (dispatch) => {
    fetch(`${proxyServer}${baseUri}search?keywords=${keywords}&resultsToTake=1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Basic ${btoa('cdf3a52c-c542-43fb-b343-972714ae2e4f:')}`,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(addData(json, keywords)));
  }
);

// Reducer
let temp = [];
const aggregateReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      // Spread the state and add new data to the state
      temp = [...state, action.data];
      // For each new data, add keywords property to the object for identification
      temp[temp.length - 1] = { ...temp[temp.length - 1], keywords: action.keywords };
      console.log('add data: ', temp);
      return temp;
    case CLEAR_DATA:
      return [];
    default:
      return state;
  }
};

export default aggregateReducer;
