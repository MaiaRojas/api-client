import { partsSearch } from '../../lib/actions/search';

describe('partsSearch', () => {
  it('should be a function', () => {
    expect(typeof partsSearch).toBe('function');
  });

  it('should create an appropriate action from input params', () => {
    expect(partsSearch({ query: 'something' })).toMatchSnapshot();
  });
});
