/* eslint-disable no-undef */
import 'isomorphic-unfetch';
import APIClient from '../APIClient';

const apiMainURL = process.env.REACT_APP_API_URL || 'https://api.laboratoria.la';

const makeHeaders = () => Promise.resolve(APIClient.getAPIKeyGenerator()()).then(
  // eslint-disable-next-line no-undef
  token => new Headers({
    authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
);

const Api = {
  get: () => fetch(endpoint),
  expressLogin: expressAuthToken => fetch(`${apiMainURL}/v2/auth/exchange/${expressAuthToken}`,
    {
      method: 'post',
    }),
  apiCallGet: (relativeUrl, queryData = {}) => makeHeaders()
    .then(callHeaders => fetch(
      `${apiMainURL}${relativeUrl}${Object.entries(queryData).reduce(
        (previous, elem) => `${previous}${elem[0]}=${elem[1]}`,
        Object.entries(queryData).length > 0 ? '?' : '',
      )}`,
      {
        method: 'GET',
        headers: callHeaders,
      },
    ))
    .then(response => response.json()),
  apiCallPost: (relativeUrl, queryData = {}, bodyData = {}) => makeHeaders()
    .then(callHeaders => fetch(
      `${apiMainURL}${relativeUrl}${Object.entries(queryData).reduce(
        (previous, elem) => `${previous}${elem[0]}=${elem[1]}`,
        Object.entries(queryData).length > 0 ? '?' : '',
      )}`,
      {
        method: 'POST',
        headers: callHeaders,
        body: JSON.stringify(bodyData),
      },
    ))
    .then(response => response.json()),
};

export default Api;
