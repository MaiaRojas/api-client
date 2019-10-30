import { userCohorts, userFeed, userProfile } from '../../lib/actions/users';

describe('userCohorts', () => {
  it('should be a function', () => {
    expect(typeof userCohorts).toBe('function');
  });

  it('should create an appropriate action from input params', () => {
    expect(userCohorts({ query: 'something' })).toMatchSnapshot();
  });
});

describe('userFeed', () => {
  it('should be a function', () => {
    expect(typeof userFeed).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(userFeed({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('userProfile', () => {
  it('should be a function', () => {
    expect(typeof userProfile).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(userProfile({ user: 'someone' })).toMatchSnapshot();
  });
});
