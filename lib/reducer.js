import { API_REQUEST, API_REQUEST_SUCCESS, API_REQUEST_FAILURE } from './actions/types';

const initialState = {};
export default (state = initialState, action = {}) => {
  if (!action.type) {
    return state;
  }

  if (action.type.startsWith(API_REQUEST)) {
    return {
      ...state,
      [action.meta.key]: { __meta: action.meta, response: null },
    };
  }

  if (action.type.startsWith(API_REQUEST_SUCCESS) || action.type.startsWith(API_REQUEST_FAILURE)) {
    return {
      ...state,
      [action.meta.key]: { __meta: action.meta, response: action.payload },
    };
  }

  return state;
};
