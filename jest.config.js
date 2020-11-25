module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    automock: false,
    testPathIgnorePatterns : [
      "<rootDir>/__tests__/testUtil.ts"
    ]
  }