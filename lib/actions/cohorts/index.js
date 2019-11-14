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
