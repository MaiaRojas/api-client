"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReviewerSurvey = exports.getLastestVersion = void 0;

var _helpers = require("../helpers");

const getLastestVersion = () => (0, _helpers.laboratoriaAPIAction)({
  type: 'REVIEWER_SURVEY_LATEST_VERSION',
  url: '/reviewer-survey',
  method: 'GET',
  key: 'reviewer-survey/latest'
});

exports.getLastestVersion = getLastestVersion;

const getReviewerSurvey = ({
  slug,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'REVIEWER_SURVEY',
  url: `/reviewer-survey/${slug}`,
  method: 'GET',
  key: 'reviewer-survey',
  ...rest
});

exports.getReviewerSurvey = getReviewerSurvey;