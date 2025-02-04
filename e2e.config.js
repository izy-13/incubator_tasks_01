module.exports = {
  testEnvironment: 'node',
  testRegex: '.e2e.ts$',
  moduleNameMapper: {
    '^@apiConstants/(.*)$': '<rootDir>/src/constants/$1',
    '^@apiTypes/(.*)$': '<rootDir>/src/types/$1',
    '^@hometasks/(.*)$': '<rootDir>/src/hometasks/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/middlewares/$1',
  },
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
};
