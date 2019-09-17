"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.updateComment = exports.addComment = exports.getComments = void 0;

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