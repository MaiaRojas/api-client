import { laboratoriaAPIAction } from '../helpers';

export const getTags = () => laboratoriaAPIAction({
  type: 'TAGS',
  url: '/tags',
  method: 'GET',
  key: 'tags',
});
