"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProjectFeedback = exports.updateProjectFeedback = exports.addProjectFeedback = exports.getProjectFeedback = void 0;

var _helpers = require("../helpers");

const getProjectFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_FEEDBACK',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'GET',
  key: `user/${user}/feedback`,
  ...rest
});

exports.getProjectFeedback = getProjectFeedback;

const addProjectFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_FEEDBACK_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'POST',
  data,
  key: 'project-feedback-add',
  ...rest
});

exports.addProjectFeedback = addProjectFeedback;

const updateProjectFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_FEEDBACK_UPDATE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'PUT',
  data,
  key: 'project-feedback-update',
  ...rest
});

exports.updateProjectFeedback = updateProjectFeedback;

const deleteProjectFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_FEEDBACK_DELETE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'DELETE',
  key: 'project-feedback-delete',
  ...rest
});

exports.deleteProjectFeedback = deleteProjectFeedback;