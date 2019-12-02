"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCohortProject = exports.getCohortProjects = exports.getCohortUsers = exports.getCohorts = void 0;

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

const getCohortUsers = ({
  cohort,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'COHORT_USERS',
  url: `/cohorts/${cohort}/users`,
  method: 'GET',
  key: `/cohorts/${cohort}/users`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.getCohortUsers = getCohortUsers;

const getCohortProjects = ({
  cohort,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'COHORT_PROJECTS',
  url: `/cohorts/${cohort}/projects`,
  method: 'GET',
  key: `cohorts/${cohort}/projects`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.getCohortProjects = getCohortProjects;

const addCohortProject = ({
  cohort,
  project,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'COHORT_PROJECT_ADD',
  url: `/cohorts/${cohort}/projects`,
  method: 'POST',
  data: project,
  key: 'cohort-project-add',
  ...rest
});

exports.addCohortProject = addCohortProject;