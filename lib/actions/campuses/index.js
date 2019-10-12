import { laboratoriaAPIAction } from '../helpers';

export const getCampuses = ({
  ...rest
} = {}) => laboratoriaAPIAction({
  type: 'CAMPUSES',
  url: '/campuses',
  method: 'GET',
  key: 'campuses',
  expiration: 1000 * 60 * 60,
  ...rest,
});
