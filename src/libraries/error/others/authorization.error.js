module.exports = {
  authorizationError: () => ({
    status  : 403,
    code    : 'AUTHORIZATION_ERROR',
    message : `You don't have permission to access this resources`,
    handled : true,
  }),
};
