import { API_REQUEST } from './types';

export const laboratoriaAPIAction = ({
  type,
  url,
  method = 'GET',
  headers,
  params,
  data,
  anonymous,
  key,
  expiration,
  namespace = 'default',
}) => ({
  type: `${API_REQUEST}${type}`,
  payload: {
    url,
    method,
    headers,
    params,
    data,
  },
  meta: {
    anonymous,
    expiration,
    key,
    suffix: type,
    namespace,
  },
});
