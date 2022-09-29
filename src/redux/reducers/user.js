// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

export const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.email,

    };
  default:
    return state;
  }
};

export default userReducer;
