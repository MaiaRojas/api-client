import reducer from '../lib/reducer';
import { API_REQUEST, API_REQUEST_SUCCESS, API_REQUEST_FAILURE } from '../lib/actions/types';

describe('reducer', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function');
  });

  it('should set initial state correctly', () => {
    expect(reducer()).toStrictEqual({});
  });

  it('should bypass any other action type', () => {
    expect(reducer(undefined, { type: 'UNKNOWN_ACTION' })).toStrictEqual({});
  });

  it('should handle API_REQUEST', () => {
    expect(
      reducer(
        {},
        {
          type: `${API_REQUEST}TEST`,
          payload: 'not a payload',
          meta: { key: 'test' },
        },
      ),
    ).toStrictEqual({
      test: {
        __meta: { key: 'test' },
        response: null,
      },
    });
  });

  it('should handle API_REQUEST_SUCCESS', () => {
    expect(
      reducer(
        {},
        {
          type: `${API_REQUEST_SUCCESS}TEST`,
          payload: { example: 'payload' },
          meta: { key: 'test' },
        },
      ),
    ).toStrictEqual({
      test: {
        __meta: { key: 'test' },
        response: { example: 'payload' },
      },
    });
  });

  it('should handle API_REQUEST_FAILURE', () => {
    expect(
      reducer(
        {},
        {
          type: `${API_REQUEST_FAILURE}TEST`,
          payload: { example: 'payload' },
          meta: { key: 'test' },
        },
      ),
    ).toStrictEqual({
      test: {
        __meta: { key: 'test' },
        response: { example: 'payload' },
      },
    });
  });
});
