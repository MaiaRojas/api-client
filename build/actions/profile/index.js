"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProfileTag = exports.updateProfileTag = exports.addProfileTag = exports.getProfileTags = exports.deleteComment = exports.updateComment = exports.addComment = exports.getComments = void 0;

var _helpers = require("../helpers");

const getComments = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_COMMENTS',
  url: `/users/${user}/profile/comments`,
  method: 'GET',
  key: `user/${user}/profile/comments`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.getComments = getComments;

const addComment = ({
  user,
  comment,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_COMMENT_ADD',
  url: `/users/${user}/profile/comments`,
  method: 'POST',
  data: comment,
  key: 'profile-comment-add',
  ...rest
});

exports.addComment = addComment;

const updateComment = ({
  user,
  comment: {
    id: commentId,
    ...data
  },
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_COMMENT_UPDATE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'PUT',
  data,
  key: 'profile-comment-update',
  ...rest
});

exports.updateComment = updateComment;

const deleteComment = ({
  user,
  commentId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_COMMENT_DELETE',
  url: `/users/${user}/profile/comments/${commentId}`,
  method: 'DELETE',
  key: 'profile-comment-delete',
  ...rest
});

exports.deleteComment = deleteComment;

const getProfileTags = ({
  user,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_TAGS',
  url: `/users/${user}/profile/tags`,
  method: 'GET',
  key: `user/${user}/profile/tags`,
  expiration: 1000 * 60 * 5,
  ...rest
});

exports.getProfileTags = getProfileTags;

const addProfileTag = ({
  user,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_TAG_ADD',
  url: `/users/${user}/profile/tags`,
  method: 'POST',
  data,
  key: 'profile-tag-add',
  ...rest
});

exports.addProfileTag = addProfileTag;

const updateProfileTag = ({
  user,
  tagId,
  data,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_TAG_UPDATE',
  url: `/users/${user}/profile/tags/${tagId}`,
  method: 'PUT',
  data,
  key: 'profile-tag-update',
  ...rest
});

exports.updateProfileTag = updateProfileTag;

const deleteProfileTag = ({
  user,
  tagId,
  ...rest
}) => (0, _helpers.laboratoriaAPIAction)({
  type: 'PROFILE_TAG_DELETE',
  url: `/users/${user}/profile/tags/${tagId}`,
  method: 'DELETE',
  key: 'profile-tag-delete',
  ...rest
});

exports.deleteProfileTag = deleteProfileTag;