import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from '../../lib/actions/profile';

describe('getComments', () => {
  it('should be a function', () => {
    expect(typeof getComments).toBe('function');
  });

  it('should create an action', () => {
    expect(getComments({ user: 'someone' })).toMatchSnapshot();
  });
});

describe('addComment', () => {
  it('should be a function', () => {
    expect(typeof addComment).toBe('function');
  });

  it('should create an action', () => {
    expect(addComment({
      user: 'someone',
      comment: {
        cohortProject: 'cohortProjectId',
        type: 'type',
        text: 'text',
      },
    })).toMatchSnapshot();
  });
});

describe('updateComment', () => {
  it('should be a function', () => {
    expect(typeof updateComment).toBe('function');
  });

  it('should create an action', () => {
    expect(updateComment({
      user: 'someone',
      comment: {
        id: 'commentId',
        text: 'text',
      },
    })).toMatchSnapshot();
  });
});

describe('deleteComment', () => {
  it('should be a function', () => {
    expect(typeof deleteComment).toBe('function');
  });

  it('should create an action', () => {
    expect(deleteComment({
      user: 'someone',
      commentId: 'commentId',
    })).toMatchSnapshot();
  });
});
