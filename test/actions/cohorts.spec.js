import { getCohorts, getCohortUsers } from '../../lib/actions/cohorts';

describe('getCohorts', () => {
  it('should be a function', () => {
    expect(typeof getCohorts).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getCohorts()).toMatchSnapshot();
  });
});

describe('getCohortUsers', () => {
  it('should be a function', () => {
    expect(typeof getCohortUsers).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getCohortUsers({ cohort: 'something' })).toMatchSnapshot();
  });
});
