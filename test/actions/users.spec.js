import { userCohorts } from '../../lib/actions/users';

describe('userCohorts', () => {
  it('should be a function', () => {
    expect(typeof userCohorts).toBe('function');
  });

  it('should create an appropriate action from input params', () => {
    expect(userCohorts({ query: 'something' })).toMatchSnapshot();
  });
});
