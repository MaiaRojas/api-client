import APIClient from './lib/APIClient';
import reducers from './lib/reducers';
import actions from './lib/actions';

APIClient.getAPIReducers = () => reducers;
APIClient.getAPIActions = () => actions;

export default APIClient;
