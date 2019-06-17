import actionTypesGenerator from './actions/actionTypes';
import reducers from './reducers';
import actions from './actions';

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

  // eslint-disable-next-line class-methods-use-this
  getAPIReducers() {
    return reducers;
  }

  // eslint-disable-next-line class-methods-use-this
  getAPIActions() {
    return actions;
  }
}

export default new APIClient();
