import { laboratoriaAPIAction } from '../helpers';

export const getFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'GET',
  key: `user/${user}/feedback`,
  ...rest,
});

export const getFeedbackBySlug = ({
  user,
  cohortId,
  projectId,
  slug,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_SLUG',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/${slug}`,
  method: 'GET',
  key: `user/${user}/feedback/${slug}`,
  ...rest,
});

export const addFeedback = ({
  user,
  cohortId,
  projectId,
  slug,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/${slug}`,
  method: 'POST',
  data,
  key: 'feedback-add',
  ...rest,
});

export const updateFeedback = ({
  user,
  cohortId,
  projectId,
  slug,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_UPDATE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/${slug}`,
  method: 'PUT',
  data,
  key: 'feedback-update',
  ...rest,
});

export const deleteFeedback = ({
  user,
  cohortId,
  projectId,
  slug,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_DELETE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/${slug}`,
  method: 'DELETE',
  key: 'feedback-delete',
  ...rest,
});

export const sendFeedback = ({
  user,
  cohortId,
  projectId,
  slug,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_SEND',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/${slug}/_send`,
  method: 'POST',
  key: 'feedback-send',
  ...rest,
});
