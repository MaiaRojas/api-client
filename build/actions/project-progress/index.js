"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProjectProgress = exports.addProjectProgress = exports.getProjectProgress = void 0;

var _helpers = require("../helpers");

const getProjectProgress = ({
  cohortId,
  projectId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_PROGRESS',
  url: `/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'GET',
  key: 'project-progress',
  ...rest
});

exports.getProjectProgress = getProjectProgress;

const addProjectProgress = ({
  cohortId,
  projectId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_PROGRESS_ADD',
  url: `/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'POST',
  data,
  key: 'project-progress-add',
  ...rest
});

exports.addProjectProgress = addProjectProgress;

const updateProjectProgress = ({
  cohortId,
  projectId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROJECT_PROGRESS_UPDATE',
  url: `/cohorts/${cohortId}/projects/${projectId}/`,
  me_progressthod: 'PUT',
  data,
  key: 'project-progress-update',
  ...rest
});

exports.updateProjectProgress = updateProjectProgress;