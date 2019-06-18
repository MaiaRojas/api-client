import actionTypesGenerator from './actions/actionTypes';

class APIClient {
  constructor() {
    this.APIKeyGenerator = () => {
      // eslint-disable-next-line no-console
      console.error('You should change the API Generator');
      return 'notAValidAPIKey';
    };

    this.apiActions = [];
    this.apiActionTypes = {};
  }

  // newApiKeyGenerator is an async or sync function returning the current user api key
  setAPIKeyGenerator(newApiKeyGenerator) {
    this.apiKeyGenerator = newApiKeyGenerator;
  }

  getAPIKeyGenerator() {
    return this.apiKeyGenerator;
  }

  setAPIActions(newApiActions) {
    this.apiActions = newApiActions;
    this.apiActionTypes = actionTypesGenerator(this.apiActions);
  }

  getAPIActionTypes() {
    return this.apiActionTypes;
  }

  getAPIcalls() {
    return this.apiActions;
  }
}

export default new APIClient();
