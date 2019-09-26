import { laboratoriaAPIAction } from '../helpers';

export const getProjectFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_FEEDBACK',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'GET',
  key: `user/${user}/feedback`,
  ...rest,
});

export const addProjectFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_FEEDBACK_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'POST',
  data,
  key: 'project-feedback-add',
  ...rest,
});

export const updateProjectFeedback = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_FEEDBACK_UPDATE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'PUT',
  data,
  key: 'project-feedback-update',
  ...rest,
});

export const deleteProjectFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_FEEDBACK_DELETE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback`,
  method: 'DELETE',
  key: 'project-feedback-delete',
  ...rest,
});

export const sendProjectFeedback = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_FEEDBACK_SEND',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/feedback/_send`,
  method: 'POST',
  key: 'project-feedback-send',
  ...rest,
});
