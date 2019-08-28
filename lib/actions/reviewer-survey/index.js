import { laboratoriaAPIAction } from '../helpers';

export const getLastestVersion = () => laboratoriaAPIAction({
  type: 'REVIEWER_SURVEY_LATEST_VERSION',
  url: '/reviewer-survey',
  method: 'GET',
  key: 'reviewer-survey/latest',
});


export const getReviewerSurvey = ({ version, ...rest }) => laboratoriaAPIAction({
  type: 'REVIEWER_SURVEY',
  url: `/reviewer-survey/${version}`,
  method: 'GET',
  key: 'reviewer-survey',
  ...rest,
});
