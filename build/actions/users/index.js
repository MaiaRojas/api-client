"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCohorts = void 0;

var _helpers = require("../helpers");

const userCohorts = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_COHORTS',
  url: `/users/${user}/cohorts`,
  method: 'GET',
  key: `user/${user}/cohorts`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.userCohorts = userCohorts;