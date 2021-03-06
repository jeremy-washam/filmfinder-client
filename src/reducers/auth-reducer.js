import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  error: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { ...state, authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { ...state, authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { ...state, authenticated: false, error: true };
    default:
      return state;
  }
};

export default AuthReducer;
