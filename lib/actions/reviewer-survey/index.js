import { laboratoriaAPIAction } from '../helpers';

export const getLastestVersion = () => laboratoriaAPIAction({
  type: 'REVIEWER_SURVEY_LATEST_VERSION',
  url: '/reviewer-survey',
  method: 'GET',
  key: 'reviewer-survey/latest',
});


export const getReviewerSurvey = ({ slug, ...rest }) => laboratoriaAPIAction({
  type: 'REVIEWER_SURVEY',
  url: `/reviewer-survey/${slug}`,
  method: 'GET',
  key: 'reviewer-survey',
  ...rest,
});
