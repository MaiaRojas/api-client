import mockAxios from 'jest-mock-axios';
import middleware from '../lib/middleware';
import { API_REQUEST_SUCCESS } from '../lib/actions/types';
import { laboratoriaAPIAction } from '../lib/actions/helpers';

afterEach(() => {
  mockAxios.reset();
});

describe('middleware', () => {
  const createStubs = ({ middleware: middlewareFn, state = {} }) => {
    const store = {
      getState: jest.fn(() => state),
      dispatch: jest.fn(),
    };
    const next = jest.fn();

    const invoke = action => middlewareFn(store)(next)(action);
    return { store, next, invoke };
  };

  it('should be a function', () => {
    expect(typeof middleware).toBe('function');
  });

  it('should skip processing if action type is unknown', () => {
    const { next, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
    });
    const action = { type: 'NOT_TO_BE_RECOGNIZED' };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
    expect(mockAxios).not.toHaveBeenCalled();
  });

  it('should skip processing if namespace action metadata doesn\'t match', () => {
    const { next, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
        namespace: 'test',
      }),
    });
    const action = laboratoriaAPIAction({ type: 'TEST', namespace: 'default' });
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
    expect(mockAxios).not.toHaveBeenCalled();
  });

  it('should provide a previous result given an action dispatched with an appropriate expiration time', () => {
    const state = {
      api: {
        test: {
          response: 'test result',
          __meta: { responseAt: (new Date()).toISOString() },
        },
      },
    };
    const { store, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
      state,
    });
    const action = laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      expiration: 1000 * 60 * 9999,
    });
    invoke(action);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: `${API_REQUEST_SUCCESS}${action.meta.suffix}`,
      payload: state.api.test.response,
      meta: action.meta,
    });
    expect(mockAxios).not.toHaveBeenCalled();
  });

  it('should fail when no keyGenerator has been defined for a non-anonymous action', () => {
    const { invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
    });

    expect(
      invoke(laboratoriaAPIAction({
        type: 'TEST',
        key: 'test',
        anonymous: false,
      })),
    ).rejects.toThrow();
    expect(mockAxios).not.toHaveBeenCalled();
  });

  it('shouldn\'t fail when no keyGenerator has been defined for an anonymous action', () => {
    const { invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
    });

    invoke(laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      url: '/',
      anonymous: true,
    }));

    expect(mockAxios).toHaveBeenCalled();
  });

  it('should dispatch a proper success action for an anonymous GET request', async () => {
    const { store, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
    });

    invoke(laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      url: '/',
      anonymous: true,
    }));
    mockAxios.mockResponse({ data: 'test result' });

    expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
      baseURL: 'http://example.com',
      url: '/',
      method: 'GET',
    }));

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      meta: expect.objectContaining({
        key: 'test',
        namespace: 'default',
        suffix: 'TEST',
        responseAt: expect.any(String),
      }),
      payload: expect.objectContaining({
        data: 'test result',
        status: 200,
      }),
      type: expect.stringMatching(/.+\/API_REQUEST_SUCCESS\/TEST/),
    }));
  });

  it('should dispatch a proper success action for an authenticated GET request', async () => {
    const { store, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
        keyGenerator: () => 'test',
      }),
    });

    await invoke(laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      url: '/',
      anonymous: false,
    }));
    mockAxios.mockResponse(
      { data: 'test result' },
    );

    expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
      baseURL: 'http://example.com',
      url: '/',
      method: 'GET',
    }));

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      meta: expect.objectContaining({
        key: 'test',
        namespace: 'default',
        suffix: 'TEST',
        responseAt: expect.any(String),
      }),
      payload: expect.objectContaining({
        data: 'test result',
        status: 200,
      }),
      type: expect.stringMatching(/.+\/API_REQUEST_SUCCESS\/TEST/),
    }));
  });

  it('should dispatch a proper failure action for an anonymous GET request', async () => {
    const { store, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
      }),
    });

    await invoke(laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      url: '/',
      anonymous: true,
    }));
    mockAxios.mockError(
      { data: 'test result', status: 500 },
    );

    expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
      baseURL: 'http://example.com',
      url: '/',
      method: 'GET',
    }));

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      meta: expect.objectContaining({
        key: 'test',
        namespace: 'default',
        suffix: 'TEST',
      }),
      payload: expect.objectContaining({
        data: 'test result',
        status: 500,
      }),
      type: expect.stringMatching(/.+\/API_REQUEST_FAILURE\/TEST/),
    }));
  });

  it('should dispatch a proper failure action an authenticated GET request', async () => {
    const { store, invoke } = createStubs({
      middleware: middleware({
        baseURL: 'http://example.com',
        keyGenerator: () => 'test',
      }),
    });

    await invoke(laboratoriaAPIAction({
      type: 'TEST',
      key: 'test',
      url: '/',
      anonymous: false,
    }));
    mockAxios.mockError(
      { data: 'test result', status: 500 },
    );

    expect(mockAxios).toHaveBeenCalledWith(expect.objectContaining({
      baseURL: 'http://example.com',
      url: '/',
      method: 'GET',
    }));

    expect(store.dispatch).toHaveBeenCalledWith(expect.objectContaining({
      meta: expect.objectContaining({
        key: 'test',
        namespace: 'default',
        suffix: 'TEST',
      }),
      payload: expect.objectContaining({
        data: 'test result',
        status: 500,
      }),
      type: expect.stringMatching(/.+\/API_REQUEST_FAILURE\/TEST/),
    }));
  });
});
