import APIClient from '../APIClient';

const initialState = {};
const apiCalls = APIClient.getAPIcalls();
apiCalls.forEach((apiCall) => {
  initialState[apiCall.saveResponseTo] = {
    loading: false,
    data: null,
    error: null,
    version: 0,
  };
});

// WARNING!
// This reducer doesn't support calling the same endpoint multiple times at once
export default (state = initialState, action) => {
  // Get action type
  const type = action.type
    .replace('API_', '')
    .replace('_SUCCESS', '')
    .replace('_FAILURE', '');
  const result = action.type.replace(`API_${type}_`, '');
  const targetApiCall =apiCalls.find(apiCall => apiCall.type === type);

  if (targetApiCall) {
    switch (result) {
      case 'SUCCESS': {
        const newState = {
          ...state,
        };
        newState[targetApiCall.saveResponseTo] = {
          loading: false,
          error: null,
          data: action.payload,
        };
        return newState;
      }
      case 'FAILURE': {
        const newState = {
          ...state,
        };
        newState[targetApiCall.saveResponseTo] = {
          loading: false,
          error: action.payload,
          data: null,
        };
        return newState;
      }
      default: {
        const newState = {
          ...state,
        };
        newState[targetApiCall.saveResponseTo] = {
          loading: true,
          error: null,
          data: null,
          version: state[targetApiCall.saveResponseTo]
          && state[targetApiCall.saveResponseTo].version
            ? state[targetApiCall.saveResponseTo].version + 1
            : 0,
        };
        return newState;
      }
    }
  }

  return state;
};
