import { getProjects } from '../../lib/actions/projects';

describe('getProjects', () => {
  it('should be a function', () => {
    expect(typeof getProjects).toBe('function');
  });

  it('should create an action', () => {
    expect(getProjects()).toMatchSnapshot();
  });
});
