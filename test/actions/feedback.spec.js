import {
  addProjectFeedback,
  deleteProjectFeedback,
  getProjectFeedback,
  sendProjectFeedback,
  updateProjectFeedback,
} from '../../lib/actions/feedback';

describe('getProjectFeedback', () => {
  it('should be a function', () => {
    expect(typeof getProjectFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getProjectFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});

describe('addProjectFeedback', () => {
  it('should be a function', () => {
    expect(typeof addProjectFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(addProjectFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('updateProjectFeedback', () => {
  it('should be a function', () => {
    expect(typeof updateProjectFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateProjectFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('deleteProjectFeedback', () => {
  it('should be a function', () => {
    expect(typeof deleteProjectFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(deleteProjectFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});

describe('sendProjectFeedback', () => {
  it('should be a function', () => {
    expect(typeof sendProjectFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(sendProjectFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});
