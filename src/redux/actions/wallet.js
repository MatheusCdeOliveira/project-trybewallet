export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_API = 'RECEIVE_API';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

const requestAPI = () => ({
  type: REQUEST_API,
});

const receiveAPI = (payload) => ({
  type: RECEIVE_API,
  payload,
});

export const getAPI = () => async (dispatch) => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  dispatch(requestAPI());
  try {
    dispatch(receiveAPI(response));
  } catch (error) {
    console.error(error);
  }
};

export const addExpenses = (payload) => ({
  type: ADD_EXPENSES,
  payload,
});

export const removeExpenses = (payload) => ({
  type: REMOVE_EXPENSES,
  payload,
});
