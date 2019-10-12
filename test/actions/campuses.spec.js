import { getCampuses } from '../../lib/actions/campuses';

describe('getCohorts', () => {
  it('should be a function', () => {
    expect(typeof getCampuses).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getCampuses()).toMatchSnapshot();
  });
});
