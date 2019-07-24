"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partsSearch = void 0;

var _helpers = require("../helpers");

const partsSearch = ({
  query,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'TOPIC_SEARCH',
  url: '/topics/_search',
  method: 'GET',
  params: {
    q: query
  },
  key: 'search',
  ...rest
});

exports.partsSearch = partsSearch;