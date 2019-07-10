import { laboratoriaAPIAction } from '../helpers';

export const partsSearch = ({ query, ...rest }) => laboratoriaAPIAction({
  type: 'TOPIC_SEARCH',
  url: '/topics/_search',
  method: 'GET',
  params: { q: query },
  key: 'search',
  ...rest,
});
