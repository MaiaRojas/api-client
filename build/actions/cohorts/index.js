"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCohorts = void 0;

var _helpers = require("../helpers");

const getCohorts = ({
  campus,
  program,
  track,
  page = 1,
  limit = 100,
  ...rest
} = {}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'COHORTS',
  url: '/cohorts',
  method: 'GET',
  key: 'cohorts',
  params: {
    campus,
    program,
    track,
    page,
    limit
  },
  expiration: 1000 * 60 * 60,
  ...rest
});

exports.getCohorts = getCohorts;