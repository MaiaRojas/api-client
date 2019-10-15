"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("babel-polyfill");

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./actions/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-underscore-dangle */
const dummyKeyGenerator = () => {
  throw new Error('No API Key Generator supplied');
};

const dispatch = ({
  store,
  type,
  result,
  meta
}) => {
  const {
    data,
    status,
    headers,
    config
  } = result;
  return store.dispatch({
    type,
    payload: {
      data,
      status,
      headers,
      config
    },
    meta
  });
};

var _default = ({
  baseURL,
  keyGenerator = dummyKeyGenerator,
  namespace = 'default',
  storeKey = 'api'
}) => store => next => async action => {
  if (!action.type.startsWith(_types.API_REQUEST) || action.meta.namespace !== namespace) {
    return next(action);
  }

  const state = store.getState();
  const previousStateValue = state[storeKey] && state[storeKey][action.meta.key];
  const responseAt = previousStateValue && previousStateValue.__meta.responseAt && new Date(previousStateValue.__meta.responseAt);

  if (responseAt && action.meta.expiration && new Date() - responseAt <= action.meta.expiration) {
    return store.dispatch({
      type: `${_types.API_REQUEST_SUCCESS}${action.meta.suffix}`,
      payload: previousStateValue.response,
      meta: { ...action.meta,
        responseAt
      }
    });
  }

  const key = !action.meta.anonymous && (await keyGenerator(store));
  const {
    method,
    url,
    headers,
    data,
    params
  } = action.payload;
  (0, _axios.default)({
    baseURL,
    url,
    method,
    data,
    params,
    headers: {
      headers,
      ...(key && {
        Authorization: `Bearer ${key}`
      })
    }
  }).then(result => dispatch({
    store,
    type: `${_types.API_REQUEST_SUCCESS}${action.meta.suffix}`,
    result,
    meta: { ...action.meta,
      responseAt: new Date().toISOString()
    }
  })).catch(({
    response: result
  }) => dispatch({
    store,
    type: `${_types.API_REQUEST_FAILURE}${action.meta.suffix}`,
    result: result.response || result,
    meta: action.meta
  }));
  return next(action);
};

exports.default = _default;