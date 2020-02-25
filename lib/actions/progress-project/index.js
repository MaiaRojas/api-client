import { laboratoriaAPIAction } from '../helpers';

export const getProgressProject = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROGRESS_PROJECT',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'GET',
  key: `user/${user}/progress`,
  ...rest,
});

export const addProgressProject = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROGRESS_PROJECT_ADD',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'POST',
  data,
  key: 'progress-project-add',
  ...rest,
});

export const updateProgressProject = ({
  user,
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROGRESS_PROJECT_UPDATE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'PUT',
  data,
  key: 'progress-project-update',
  ...rest,
});

export const deleteProgressProject = ({
  user,
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROGRESS_PROJECT_DELETE',
  url: `/users/${user}/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'DELETE',
  key: 'progress-project-delete',
  ...rest,
});
