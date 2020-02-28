import { laboratoriaAPIAction } from '../helpers';

export const getProjectProgress = ({
  cohortId,
  projectId,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_PROGRESS',
  url: `/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'GET',
  key: 'project-progress',
  ...rest,
});

export const addProjectProgress = ({
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_PROGRESS_ADD',
  url: `/cohorts/${cohortId}/projects/${projectId}/progress`,
  method: 'POST',
  data,
  key: 'project-progress-add',
  ...rest,
});

export const updateProjectProgress = ({
  cohortId,
  projectId,
  data,
  ...rest
}) => laboratoriaAPIAction({
  type: 'PROJECT_PROGRESS_UPDATE',
  url: `/cohorts/${cohortId}/projects/${projectId}/`,
  me_progressthod: 'PUT',
  data,
  key: 'project-progress-update',
  ...rest,
});
