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

export const updateComment = ({
  user,
  comment: { id: commentId, ...data },
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_UPDATE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'PUT',
  data,
  key: 'profile-comment-update',
  ...rest,
});

export const deleteComment = ({ user, commentId, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_COMMENT_DELETE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'DELETE',
  key: 'profile-comment-delete',
  ...rest,
});

export const getProfileTags = ({ user, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_TAGS',
  url: `/users/${user}/profile/tags`,
  method: 'GET',
  key: `user/${user}/profile/tags`,
  expiration: 1000 * 60 * 5,
  ...rest,
});

export const addProfileTag = ({ user, data, ...rest }) => laboratoriaAPIAction({
  type: 'PROFILE_TAG_ADD',
  url: `/users/${user}/profile/tags`,
  method: 'POST',
  data,
  key: 'profile-tag-add',
  ...rest,
});

export const updateProfileTag = ({
  user,
  tagId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROFILE_TAG_UPDATE',
  url: `/users/${user}/profile/tags/${tagId}`,
  method: 'PUT',
  data,
  key: 'profile-tag-update',
  ...rest,
});
