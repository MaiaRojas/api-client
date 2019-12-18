"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTags = void 0;

var _helpers = require("../helpers");

const getTags = ({ ...rest
} = {}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'TAGS',
  url: '/tags',
  method: 'GET',
  key: 'tags',
  expiration: 1000 * 60 * 60,
  ...rest
});

exports.getTags = getTags;