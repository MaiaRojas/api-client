import {
  addProgressProject,
  deleteProgressProject,
  getProgressProject,
  updateProgressProject,
} from '../../lib/actions/progress-project';

describe('getProgressProject', () => {
  it('should be a function', () => {
    expect(typeof getProgressProject).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getProgressProject({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});

describe('addProgressProject', () => {
  it('should be a function', () => {
    expect(typeof addProgressProject).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(addProgressProject({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('updateProgressProject', () => {
  it('should be a function', () => {
    expect(typeof updateProgressProject).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateProgressProject({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('deleteProgressProject', () => {
  it('should be a function', () => {
    expect(typeof deleteProgressProject).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(deleteProgressProject({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});
