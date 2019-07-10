import { laboratoriaAPIAction } from '../../lib/actions/helpers';

describe('laboratoriaAPIAction', () => {
  it('should be a function', () => {
    expect(typeof laboratoriaAPIAction).toBe('function');
  });

  it('should create an appropriate action from input params', () => {
    const actionCreatorParams = {
      type: 'EXAMPLE_REQUEST',
      url: 'http://example.com',
      method: 'GET',
      params: { test: 'param' },
      data: { test: 'data' },
      anonymous: true,
      key: 'example',
      expiration: 0,
      namespace: 'test',
    };

    expect(laboratoriaAPIAction(actionCreatorParams)).toMatchSnapshot();
  });
});
