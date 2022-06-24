import * as apiData1 from '../__test_data__/api_data1.json';
import jobsReducer, { updateData, clearData } from '../redux/jobs/jobs';

const initialState = {};

describe('UPDATE_DATA action', () => {
  it('Should update the state with API data', () => {
    // Fire updateData to the jobsReducer
    expect(jobsReducer(initialState, updateData(apiData1)))
      // Expect the state to be updated with the API data
      .toEqual(apiData1);
  });
});

describe('CLEAR_DATA action', () => {
  it('Should reset the state to initial state', () => {
    // Fire updateData to the jobsReducer
    expect(jobsReducer(apiData1, clearData()))
      // Expect the state to be updated with the API data
      .toEqual(initialState);
  });
});
