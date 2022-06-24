import * as apiData1 from '../__test_data__/api_data1.json';
import * as apiData2 from '../__test_data__/api_data2.json';
import aggregateReducer, { addData, clearData } from '../redux/aggregate/aggregate';

const initialState = [];

describe('ADD_DATA action', () => {
  it('Should populate an empty state with the API data', () => {
    // Fire addData to the aggregateReducer
    expect(aggregateReducer(initialState, addData(apiData1)))
      // Expect the state to be populated with the API data
      .toEqual([apiData1]);
  });

  it('Should append non-empty state with an additional API data', () => {
    // Fire addData to the aggregateReducer
    expect(aggregateReducer([apiData1], addData(apiData2)))
      // Expect the state to be appended with an additional API data
      .toEqual([apiData1, apiData2]);
  });
});

describe('CLEAR_DATA action', () => {
  it('Should reset the state to initial state', () => {
    // Fire updateData to the jobsReducer
    expect(aggregateReducer([apiData1, apiData2], clearData()))
      // Expect the state to be updated with the API data
      .toEqual(initialState);
  });
});
