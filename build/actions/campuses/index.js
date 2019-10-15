"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCampuses = void 0;

var _helpers = require("../helpers");

const getCampuses = ({ ...rest
} = {}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'CAMPUSES',
  url: '/campuses',
  method: 'GET',
  key: 'campuses',
  expiration: 1000 * 60 * 60,
  ...rest
});

exports.getCampuses = getCampuses;