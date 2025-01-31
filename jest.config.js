/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@apiConstants/(.*)$': '<rootDir>/src/constants/$1',
    '^@apiTypes/(.*)$': '<rootDir>/src/types/$1',
    '^@hometasks/(.*)$': '<rootDir>/src/hometasks/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/__tests__/e2e/'],
};
