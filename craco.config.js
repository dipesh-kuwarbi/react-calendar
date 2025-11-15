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

      return jestConfig;
    },
  },
};