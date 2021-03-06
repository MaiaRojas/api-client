# Laboratoria API Redux Client

This is a thin layer of abstraction on top of `axios` and `redux` for being used mainly as a client for Laboratoria's API. A set of redux actions is also included for making common API requests easily.

# Install
```bash
npm install Laboratoria/api-client --save
```

# Setup
1. Add the middleware to your store:

```js
import { middleware } from 'api-client';

const store = createStore(
  reducer,
  applyMiddleware(middleware({
    baseURL: 'https://example.com',
    // can be ommited if you're making anonymous requests only
    keyGenerator: (store) => 'API KEY',
  })),
);
```

2. Add the reducer to your store:

```js
import { reducer as api } from 'api-client';

export default combineReducers({
  // If anything other than 'api' is used, this
  // reducer key must also be set in the previous step
  api,
  // ...
});
```
3. Enjoy

# Usage

You just need to dispatch an action to the store for the middleware to intercept and perform a request unto. A helper function is provided for creating such actions and can be used as such:

```js
import { laboratoriaAPIAction } from 'api-client/lib/actions/helpers';

const action = laboratoriaAPIAction({
  type: 'TOPIC_SEARCH',
  url: '/topics/_search',
  method: 'GET',
  params: { q: 'search query' },
  key: 'search',
});

// dispatch(action);
```

Parameters for this action creator are to be passed to axios as well so `data`, `params`, `headers`, and other configuration options can be set as well.

Although you can interact with any endpoint and API with this action creator, action creators for API endpoints are also provided so instead of forging a complete action like the one shown above (used for searching in topic parts) you can simply do:

```js
import { partsSearch } from 'api-client';

action = partsSearch({ query: 'search query' });

// dispatch(action);
```

The middleware will deal with matching dispatched actions (see details below) and will store response results in a appropriate state key (in this example, the dispatched action will be stored in the `api.search` property) that can be retrieved anytime:

```js
// ex.: when connecting your React component to the store
connect(
  ({ api }) => ({
    // get is imported from lodash for convenience
    results: get(api, 'search.response.data'),
  })
)(MyComponent);
```

When an api action is dispatched and until there is a response, a value of `null` will be set for the given key in the state. This is made for making loading states easier to identify. Inside the state, responses have the following shape:

```js
{
  api: {
      actionKey: { // Set in dispatched action `key` parameter
        __meta: { // Request-response metadata, used internally by the middleware
          key: 'actionKey',
          suffix: 'ACTION_TYPE',
          namespace: 'default',
          responseAt: '2099-01-01T00:00:00.000Z'
        },
        response: { // response results
          data: '', // response body
          status: 200, // HTTP status code
          headers: {}, // response headers
          config: {}, // axios response config object
        },
      },
  },
}
```

# API

## Middleware

### `middleware({ baseURL, keyGenerator, namespace, storeKey })`
Client middleware needs to be initialized by setting a base URL and a key generator when performing authenticated requests.

This middleware will process requests matching with certain prefix and namespace (set in the action meta).

If the processed action is set to be non-anonymous, the generator key function will be called and its return valued will be used to authenticate the request.

Requests are made using `axios` and the paremeters used for it are taken from the action payload. Successful and failed responses will dispatch an action for the reducer to store in the state.

If there is a previous response in the store and the current action has an `expiration` set that hasn't been reached yet, the previous response will be dispatched as successful instead.

#### Params
- `baseURL`: Required. Web service base URL. Every request this middleware will perform will be relative to this URL.
- `keyGenerator(store)`: A function that will be called every time an authenticated request will be performed. Such function will receive the store as its only argument. Its results will be used to set an `Authorization: Bearer` header. Can be an async function.
- `namespace`: String used to scope requests to this specific middeware instance. Defaults to `'default'`.
- `storeKey`: Store key for the middleware to get cached responses from. Defaults to `'api'`.

## Reducer

### `reducer(state, action)`
Its just a simple redux reducer function that stores matching actions to the store. For the initial dispatched action, a value of `{ response: null }` will be stored, and whatever the middleware dispatches otherwise.

## Action Helpers

### `laboratoriaAPIAction({ type, url, method, headers, params, data, anonymous, key, expiration, namespace })`
An action creator that will appropriately shape an action ready to be processed by the middleware.

#### Params
- `type`: Action type. Will be suffixed to the internal API client action prefix.
- `url`: Request URL. This is relative to the base URL set in the middleware.
- `method`: Request method. Defaults to `'GET'`.
- `headers`: HTTP Headers object to be sent in the request.
- `params`: `axios` params object to be used in `GET` requests.
- `data`: `axios` data object to be used in `POST`, `PUT` and `PATCH` requests.
- `anonymous`: Flag for performing an unauthenticated request. This meaans whether the `keyGenerator` middleware function should be called or not. Defaults to `false`.
- `key`: Required. Store key for the reducer to set responses to.
- `expiration`: Expiration time for the current request in milliseconds. If a response is already present for the current action type and `expiration` ms haven't passed yet, the same response will be issued.
- `namespace`: String used to scope requests to this specific middeware instance. Defaults to `'default'`.


## Action Creators

### Users
#### `userCohorts({ user, ...rest })`
Get cohorts for a user.

##### Params
- `user`: User ID or email to search cohorts after.
- `rest`: Other parameters to be passed to `laboratoriaAPIAction`.

### Search
#### `partsSearch({ query, ...rest })`
Get parts matching a search query.

##### Params
- `query`: Search term.
- `rest`: Other parameters to be passed to `laboratoriaAPIAction`.
