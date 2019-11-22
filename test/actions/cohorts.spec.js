import {
  getCohorts,
  getCohortUsers,
  getCohortProjects,
  addCohortProject,
} from '../../lib/actions/cohorts';

describe('getCohorts', () => {
  it('should be a function', () => {
    expect(typeof getCohorts).toBe('function');
  });

  it('should create an action', () => {
    expect(getCohorts()).toMatchSnapshot();
  });
});

describe('getCohortUsers', () => {
  it('should be a function', () => {
    expect(typeof getCohortUsers).toBe('function');
  });

  it('should create an action', () => {
    expect(getCohortUsers({ cohort: 'something' })).toMatchSnapshot();
  });
});

describe('getCohortProjects', () => {
  it('should be a function', () => {
    expect(typeof getCohortProjects).toBe('function');
  });

  it('should create an action', () => {
    expect(getCohortProjects({ cohort: 'someone' })).toMatchSnapshot();
  });
});

describe('addCohortProject', () => {
  it('should be a function', () => {
    expect(typeof addCohortProject).toBe('function');
  });

  it('should create an action', () => {
    expect(addCohortProject({
      cohort: 'someone',
      project: {
        id: 'projectId',
      },
    })).toMatchSnapshot();
  });
});
