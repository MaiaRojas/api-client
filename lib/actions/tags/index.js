import { laboratoriaAPIAction } from '../helpers';

export const getTags = ({
  ...rest
} = {}) => laboratoriaAPIAction({
  type: 'TAGS',
  url: '/tags',
  method: 'GET',
  key: 'tags',
  expiration: 1000 * 60 * 60,
  ...rest,
});
