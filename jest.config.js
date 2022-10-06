module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '^apis/(.*)$': '<rootDir>/src/apis/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^server/(.*)$': '<rootDir>/src/server/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^queries/(.*)$': '<rootDir>/src/queries/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!nanoid/.*)'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
// "jest": {
//   "preset": "ts-jest",
//   "testEnvironment": "node",
//   "transform": {
//     "^.+\\.(t|j)sx?$": "ts-jest"
//   },
//   "transformIgnorePatterns": [
//     "node_modules/(?!variables/.*)"
//   ]
// },
