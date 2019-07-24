import { laboratoriaAPIAction } from '../helpers';

export const userCohorts = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_COHORTS',
  url: `/users/${user}/cohorts`,
  method: 'GET',
  key: `user/${user}/cohorts`,
  expiration: 1000 * 60 * 5,
  ...rest,
});
