module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!@reactory/from-class).+\\.js$'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  coverageReporters: [
    'lcov',
    'text'
  ]
}
