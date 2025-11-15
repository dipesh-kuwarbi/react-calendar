module.exports = {
  jest: {
    configure: (jestConfig) => {
      jestConfig.moduleNameMapper = {
        ...jestConfig.moduleNameMapper,
        '^@chakra-ui\\/utils\\/context$': '@chakra-ui/utils',
      };

      jestConfig.transformIgnorePatterns = [
        'node_modules/(?!(?:.pnpm|@babel|@react-aria|@react-stately|@internationalized|@chakra-ui)/)',
      ];
      jestConfig.reporters = [
        'default', 
        [
          'jest-junit',
          {
            outputDirectory: 'reports', 
            outputName: 'junit.xml',   
            ancestorSeparator: ' › ',   
            uniqueOutputName: 'false',  
            suiteNameTemplate: '{filepath}',
            classNameTemplate: '{classname}',
            titleTemplate: '{title}',
          },
        ],
      ];
      jestConfig.collectCoverageFrom = [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx', 
        '!src/reportWebVitals.ts',
        '!src/serviceWorker.ts',
        '!src/**/*.d.ts',
        '!src/types/**/*', 
      ];
      jestConfig.coverageReporters = ['text', 'html', 'json-summary'];

      return jestConfig;
    },
  },
};