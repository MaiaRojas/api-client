import {
  addFeedback,
  deleteFeedback,
  getFeedbacks,
  getFeedbacksByType,
  sendFeedback,
  updateFeedback,
} from '../../lib/actions/feedback';

describe('getFeedbacks', () => {
  it('should be a function', () => {
    expect(typeof getFeedbacks).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getFeedbacks({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
    })).toMatchSnapshot();
  });
});

describe('getFeedbacksByType', () => {
  it('should be a function', () => {
    expect(typeof getFeedbacksByType).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getFeedbacksByType({
      user: 'someone',
      cohortId: 'someone',
      projectId: 'someone',
      reviewerSurvey: 'someone',
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
      reviewerSurvey: 'someone',
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
      id: 'someone',
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
      id: 'someone',
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
      reviewerSurvey: 'someone',
    })).toMatchSnapshot();
  });
});
