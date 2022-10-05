// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { ADD_EXPENSES,
  RECEIVE_API, REMOVE_EXPENSES, REQUEST_API } from '../actions/wallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return state;
  case RECEIVE_API:
    return {
      ...state,
      currencies: Object.keys(action.payload).filter((coin) => coin !== 'USDT'),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses.filter((element) => element.id !== action.payload)],
    };
  default:
    return state;
  }
};

export default walletReducer;
