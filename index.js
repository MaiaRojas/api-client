import APIClient from './lib/APIClient';
import reducers from './lib/reducers';
import action from './lib/actions';

APIClient.getAPIReducers = () => reducers;
APIClient.doAPICall = action;

export default APIClient;
