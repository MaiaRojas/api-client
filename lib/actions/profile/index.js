import { laboratoriaAPIAction } from '../helpers';

export const getComments = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENTS',
  url: `/users/${user}/profile/comments`,
  method: 'GET',
  key: `user/${user}/profile/comments`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const addComment = ({ user, comment, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_ADD',
  url: `/users/${user}/profile/comments`,
  method: 'POST',
  data: comment,
  key: 'profile-comment-add',
  ...rest,
});
