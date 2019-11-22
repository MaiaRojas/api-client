import { laboratoriaAPIAction } from '../helpers';

export const getProjects = ({
  ...rest
} = {}) => laboratoriaAPIAction({
  type: 'PROJECTS',
  url: '/projects',
  method: 'GET',
  key: 'projects',
  expiration: 1000 * 60 * 60,
  ...rest,
});
