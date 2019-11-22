import { getCampuses } from '../../lib/actions/campuses';

describe('getCampuses', () => {
  it('should be a function', () => {
    expect(typeof getCampuses).toBe('function');
  });

  it('should create an action', () => {
    expect(getCampuses()).toMatchSnapshot();
  });
});
