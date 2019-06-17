import Api from '../api';

export const getApiCall = dispatch => (apiCall, params = {}, queryData) => {
  let url = apiCall.relativeUrl;
  Object.entries(params).forEach((param) => {
    url = url.replace(`:${param[0]}`, param[1]);
  });
  Api.apiCallGet(url, queryData)
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

export const postApiCall = (
  apiCall,
  params = {},
  queryData,
  bodyData,
) => (dispatch) => {
  dispatch({
    type: `API_${apiCall.type}`,
  }); // Mark this call as loading...

  let url = apiCall.relativeUrl;
  Object.entries(params).forEach((param) => {
    url = url.replace(`:${param[0]}`, param[1]);
  });

  Api.apiCallPost(url, queryData, bodyData)
    .then(response => dispatch({
      type: `API_${apiCall.type}_SUCCESS`,
      payload: response,
    }))
    .catch(error => dispatch({
      type: `API_${apiCall.type}_FAILURE`,
      payload: error,
    }));
};
