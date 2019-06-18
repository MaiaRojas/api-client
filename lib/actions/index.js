import Api from '../api';
import APIClient from '../APIClient';

export default dispatch => (apiCallName, params = {}, queryData, bodyData) => {
  const apiCall = APIClient.apiActions().find(apiCallData => apiCallData.type === apiCallName);
  let url = apiCall.relativeUrl;
  Object.entries(params).forEach((param) => {
    url = url.replace(`:${param[0]}`, param[1]);
  });
  Api.apiCall(url, apiCall.method, queryData, bodyData)
    .then(response => dispatch({
      type: `API_${apiCall.type}_SUCCESS`,
      payload: response,
    }))
    .catch(error => dispatch({
      type: `API_${apiCall.type}_FAILURE`,
      payload: error,
    }));

  return dispatch({
    type: `API_${apiCall.type}`,
  }); // Mark this call as loading...
};
