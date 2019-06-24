import actionTypesGenerator from './actions/actionTypes';
import reducerGenerator from './reducers/api';

class APIClient {
  constructor() {
    this.APIKeyGenerator = () => {
      // eslint-disable-next-line no-console
      console.error('You should change the API Generator');
      return 'notAValidAPIKey';
    };

    this.apiActions = [];
    this.apiActionTypes = {};
    this.apiMainURL = "https://api.laboratoria.la";
  }

  // newApiKeyGenerator is an async or sync function returning the current user api key
  setAPIKeyGenerator(newApiKeyGenerator) {
    this.APIKeyGenerator = newApiKeyGenerator;
  }

  getAPIKeyGenerator() {
    return this.APIKeyGenerator;
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

  getAPIReducers() {
    return reducerGenerator(this.apiActions);
  }

  getMainURL() {
    return this.apiMainURL;
  }

  setMainURL(newMainURL) {
    this.apiMainURL = newMainURL;
  }
}

export default new APIClient();
