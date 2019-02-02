module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
}
