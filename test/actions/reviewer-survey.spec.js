import { getLastestVersion, getReviewerSurvey } from '../../lib/actions/reviewer-survey';

describe('getLastestVersion', () => {
  it('should be a function', () => {
    expect(typeof getLastestVersion).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getLastestVersion()).toMatchSnapshot();
  });
});

describe('getReviewerSurvey', () => {
  it('should be a function', () => {
    expect(typeof getReviewerSurvey).toBe('function');
  });

  it('should create an appropriate action', () => {
    expect(getReviewerSurvey({ slug: 'something' })).toMatchSnapshot();
  });
});
