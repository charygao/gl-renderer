module.exports = {
  globals: {
    GlRenderer: true,
    glDoodle: true,
    before: true,
    after: true,
    describe: true,
    it: true,
    __DEV__: true
  },
  extends: 'eslint-config-sprite',
  plugins: ['html'],
  rules: {
    complexity: ['warn', 25],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn'
  }
};
