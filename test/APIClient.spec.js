/* eslint-disable global-require */
describe('Main module', () => {
  it('Should be one and only one instance', () => {
    const theCallback = jest.fn(() => 'aValidAPIKey');
    const firstInstance = require('../lib/APIClient');
    const secondInstance = require('../lib/APIClient');

    firstInstance.default.setApiKeyGenerator(theCallback);
    expect(secondInstance.default.getAPIKeyGenerator()())
      .toBe('aValidAPIKey');
    expect(firstInstance.default.getAPIKeyGenerator()())
      .toBe(secondInstance.default.getAPIKeyGenerator()());
  });

  it('Should generate all posible actions names for redux', () => {
    const aInstance = require('../lib/APIClient');
    aInstance.default.setAPIActions([
      {
        type: 'ACTION',
        relativeUrl: '/a/relative/url',
        saveResponseTo: 'responseBucket',
      },
    ]);
    expect(aInstance.default.getAPIActionTypes())
      .toStrictEqual({
        API_ACTION: 'API_ACTION',
        API_ACTION_SUCCESS: 'API_ACTION_SUCCESS',
        API_ACTION_FAILURE: 'API_ACTION_FAILURE',
      });
  });
});
