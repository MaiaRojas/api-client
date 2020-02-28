import { laboratoriaAPIAction } from '../helpers';

export const getFeedbacks = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACKS',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks`,
  method: 'GET',
  key: `user/${user}/feedbacks`,
  ...rest,
});

export const getFeedbacksByType = ({
  user,
  cohortId,
  projectId,
  reviewerSurvey,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_REVIEWER_SURVEY',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks/${reviewerSurvey}`,
  method: 'GET',
  key: `user/${user}/feedbacks/${reviewerSurvey}`,
  ...rest,
});

export const addFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks`,
  method: 'POST',
  data,
  key: 'feedback-add',
  ...rest,
});

export const updateFeedback = ({
  id,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_UPDATE',
  url: `/feedbacks/${id}`,
  method: 'PUT',
  data,
  key: 'feedback-update',
  ...rest,
});

export const deleteFeedback = ({
  id,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_DELETE',
  url: `/feedbacks/${id}`,
  method: 'DELETE',
  key: 'feedback-delete',
  ...rest,
});

export const sendFeedback = ({
  user,
  cohortId,
  projectId,
  reviewerSurvey,
  ...rest
}) => laboratoriaAPIAction({
  type: 'FEEDBACK_SEND',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedbacks/${reviewerSurvey}/_send`,
  method: 'POST',
  key: 'feedback-send',
  ...rest,
});
