export default apiCalls => apiCalls.reduce((acc, apiCall) => {
  const { type } = apiCall;
  return {
    ...acc,
    [`API_${type}`]: `API_${type}`,
    [`API_${type}_SUCCESS`]: `API_${type}_SUCCESS`,
    [`API_${type}_FAILURE`]: `API_${type}_FAILURE`
  };
}, {});
