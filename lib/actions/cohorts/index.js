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
