"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userProfile = exports.userFeed = exports.userCohorts = void 0;

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

const userFeed = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_FEED',
  url: `/users/${user}/feed`,
  method: 'GET',
  key: `user/${user}/feed`,
  expiration: 1000 * 60 * 1,
  ...rest
});

exports.userFeed = userFeed;

const userProfile = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'USER_PROFILE',
  url: `/users/${user}/profile`,
  method: 'GET',
  key: `user/${user}/profile`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.userProfile = userProfile;