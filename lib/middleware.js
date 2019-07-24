/* eslint-disable no-underscore-dangle */
import 'babel-polyfill';
import axios from 'axios';
import { API_REQUEST, API_REQUEST_SUCCESS, API_REQUEST_FAILURE } from './actions/types';

const dummyKeyGenerator = () => {
  throw new Error('No API Key Generator supplied');
};

const dispatch = ({
  store,
  type,
  result,
  meta,
}) => {
  const {
    data,
    status,
    headers,
    config,
  } = result;
  return store.dispatch({
    type,
    payload: {
      data,
      status,
      headers,
      config,
    },
    meta,
  });
};

export default ({
  baseURL,
  keyGenerator = dummyKeyGenerator,
  namespace = 'default',
  storeKey = 'api',
}) => store => next => async (action) => {
  if (!action.type.startsWith(API_REQUEST) || action.meta.namespace !== namespace) {
    return next(action);
  }

  const state = store.getState();
  const previousStateValue = state[storeKey] && state[storeKey][action.meta.key];
  const responseAt = previousStateValue
    && previousStateValue.__meta.responseAt
    && new Date(previousStateValue.__meta.responseAt);
  if (responseAt
    && action.meta.expiration
    && (new Date() - responseAt <= action.meta.expiration)
  ) {
    return store.dispatch({
      type: `${API_REQUEST_SUCCESS}${action.meta.suffix}`,
      payload: previousStateValue.response,
      meta: action.meta,
    });
  }

  const key = !action.meta.anonymous && await keyGenerator(store);
  const {
    method,
    url,
    headers,
    data,
    params,
  } = action.payload;

  axios({
    baseURL,
    url,
    method,
    data,
    params,
    headers: {
      headers,
      ...(key && { Authorization: `Bearer ${key}` }),
    },
  })
    .then(result => dispatch({
      store,
      type: `${API_REQUEST_SUCCESS}${action.meta.suffix}`,
      result,
      meta: { ...action.meta, responseAt: (new Date()).toISOString() },
    }))
    .catch(result => dispatch({
      store,
      type: `${API_REQUEST_FAILURE}${action.meta.suffix}`,
      result,
      meta: action.meta,
    }));

  return next(action);
};
