module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],
  },
};
