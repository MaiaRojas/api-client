import { laboratoriaAPIAction } from '../helpers';

export const getCohorts = ({
  campus,
  program,
  track,
  page = 1,
  limit = 100,
  ...rest
} = {}) => laboratoriaAPIAction({
  type: 'COHORTS',
  url: '/cohorts',
  method: 'GET',
  key: 'cohorts',
  params: {
    campus,
    program,
    track,
    page,
    limit,
  },
  expiration: 1000 * 60 * 60,
  ...rest,
});

export const getCohortUsers = ({ cohort, ...rest }) => laboratoriaAPIAction({
  type: 'COHORT_USERS',
  url: `/cohorts/${cohort}/users`,
  method: 'GET',
  key: `/cohorts/${cohort}/users`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const getCohortProjects = ({ cohort, ...rest }) => laboratoriaAPIAction({
  type: 'COHORT_PROJECTS',
  url: `/cohorts/${cohort}/projects`,
  method: 'GET',
  key: `cohorts/${cohort}/projects`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const addCohortProject = ({ cohort, project, ...rest }) => laboratoriaAPIAction({
  type: 'COHORT_PROJECT_ADD',
  url: `/cohorts/${cohort}/projects`,
  method: 'POST',
  data: project,
  key: 'cohort-project-add',
  ...rest,
});
