import {
  addFeedback,
  deleteFeedback,
  getFeedback,
  getFeedbackBySlug,
  sendFeedback,
  updateFeedback,
} from '../../lib/actions/feedback';

describe('getFeedback', () => {
  it('should be a function', () => {
    expect(typeof getFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
    })).toMatchSnapshot();
  });
});

describe('getFeedbackBySlug', () => {
  it('should be a function', () => {
    expect(typeof getFeedbackBySlug).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getFeedbackBySlug({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
    })).toMatchSnapshot();
  });
});

describe('addFeedback', () => {
  it('should be a function', () => {
    expect(typeof addFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(addFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('updateFeedback', () => {
  it('should be a function', () => {
    expect(typeof updateFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(updateFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
      data: { foo: 'bar' },
    })).toMatchSnapshot();
  });
});

describe('deleteFeedback', () => {
  it('should be a function', () => {
    expect(typeof deleteFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(deleteFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
    })).toMatchSnapshot();
  });
});

describe('sendFeedback', () => {
  it('should be a function', () => {
    expect(typeof sendFeedback).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(sendFeedback({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      slug: 'someone',
    })).toMatchSnapshot();
  });
});
