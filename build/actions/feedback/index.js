"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFeedback = exports.deleteFeedback = exports.updateFeedback = exports.addFeedback = exports.getFeedbacksByType = exports.getFeedbacks = void 0;

var _helpers = require("../helpers");

const getFeedbacks = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACKS',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks`,
  method: 'GET',
  key: `user/${user}/feedbacks`,
  ...rest
});

exports.getFeedbacks = getFeedbacks;

const getFeedbacksByType = ({
  user,
  cohortId,
  projectId,
  reviewerSurvey,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACK_REVIEWER_SURVEY',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks/${reviewerSurvey}`,
  method: 'GET',
  key: `user/${user}/feedbacks/${reviewerSurvey}`,
  ...rest
});

exports.getFeedbacksByType = getFeedbacksByType;

const addFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACK_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks`,
  method: 'POST',
  data,
  key: 'feedback-add',
  ...rest
});

exports.addFeedback = addFeedback;

const updateFeedback = ({
  id,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACK_UPDATE',
  url: `/feedbacks/${id}`,
  method: 'PUT',
  data,
  key: 'feedback-update',
  ...rest
});

exports.updateFeedback = updateFeedback;

const deleteFeedback = ({
  id,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACK_DELETE',
  url: `/feedbacks/${id}`,
  method: 'DELETE',
  key: 'feedback-delete',
  ...rest
});

exports.deleteFeedback = deleteFeedback;

const sendFeedback = ({
  user,
  cohortId,
  projectId,
  reviewerSurvey,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'FEEDBACK_SEND',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks/${reviewerSurvey}/_send`,
  method: 'POST',
  key: 'feedback-send',
  ...rest
});

exports.sendFeedback = sendFeedback;