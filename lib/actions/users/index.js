import { laboratoriaAPIAction } from '../helpers';

export const userCohorts = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_COHORTS',
  url: `/users/${user}/cohorts`,
  method: 'GET',
  key: `user/${user}/cohorts`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const userFeed = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_FEED',
  url: `/users/${user}/feed`,
  method: 'GET',
  key: `user/${user}/feed`,
  expiration: 1000 * 60 * 1,
  ...rest,
});

export const userProfile = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'USER_PROFILE',
  url: `/users/${user}/profile`,
  method: 'GET',
  key: `user/${user}/profile`,
  expiration: 1000 * 60 * 5,
  ...rest,
});
