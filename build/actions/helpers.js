"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.laboratoriaAPIAction = void 0;

var _types = require("./types");

const laboratoriaAPIAction = ({
  type,
  url,
  method = 'GET',
  headers,
  params,
  data,
  anonymous,
  key,
  expiration,
  namespace = 'default'
}) => ({
  type: `${_types.API_REQUEST}${type}`,
  payload: {
    url,
    method,
    headers,
    params,
    data
  },
  meta: {
    anonymous,
    expiration,
    key,
    suffix: type,
    namespace
  }
});

exports.laboratoriaAPIAction = laboratoriaAPIAction;
