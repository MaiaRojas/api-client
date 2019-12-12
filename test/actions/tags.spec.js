import { getTags } from '../../lib/actions/tags';

describe('getTags', () => {
  it('should be a function', () => {
    expect(typeof getTags).toBe('function');
  });

  it('should create an action', () => {
    expect(getTags()).toMatchSnapshot();
  });
});
