/* eslint-disable no-undef */
import 'isomorphic-unfetch';
import APIClient from '../APIClient';

const apiMainURL = APIClient.getMainURL();

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
  apiCall: (relativeUrl, rawMethod, queryData = {}, bodyData = {}) => makeHeaders()
    .then((callHeaders) => {
      const method = rawMethod.toLowerCase();
      const options = {
        method,
        headers: callHeaders,
      };

      if (method === 'post' || method === 'put') {
        options[body] = JSON.stringify(bodyData);
      }

      fetch(
        `${apiMainURL}${relativeUrl}${Object.entries(queryData).reduce(
          (previous, elem) => `${previous}${elem[0]}=${elem[1]}`,
          Object.entries(queryData).length > 0 ? '?' : '',
        )}`,
        options,
      );
    })
    .then(response => response.json()),
};

export default Api;
