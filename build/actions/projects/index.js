"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = void 0;

var _helpers = require("../helpers");

const getProjects = ({ ...rest
} = {}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECTS',
  url: '/projects',
  method: 'GET',
  key: 'projects',
  expiration: 1000 * 60 * 60,
  ...rest
});

exports.getProjects = getProjects;