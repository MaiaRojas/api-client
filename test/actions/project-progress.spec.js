import {
  addProjectProgress,
  getProjectProgress,
  updateProjectProgress,
} from '../../lib/actions/project-progress';

describe('getProjectProgress', () => {
  it('should be a function', () => {
    expect(typeof getProjectProgress).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getProjectProgress({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});

describe('addProjectProgress', () => {
  it('should be a function', () => {
    expect(typeof addProjectProgress).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(addProjectProgress({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('updateProjectProgress', () => {
  it('should be a function', () => {
    expect(typeof updateProjectProgress).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateProjectProgress({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});
