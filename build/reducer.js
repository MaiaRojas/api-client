"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _types = require("./actions/types");

const initialState = {};

var _default = (state = initialState, action = {}) => {
  if (!action.type) {
    return state;
  }

  if (action.type.startsWith(_types.API_REQUEST)) {
    return { ...state,
      [action.meta.key]: {
        __meta: action.meta,
        response: null
      }
    };
  }

  if (action.type.startsWith(_types.API_REQUEST_SUCCESS) || action.type.startsWith(_types.API_REQUEST_FAILURE)) {
    return { ...state,
      [action.meta.key]: {
        __meta: action.meta,
        response: action.payload
      }
    };
  }

  return state;
};

exports.default = _default;
