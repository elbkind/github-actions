const TEST_REGEX = "(/__tests__/.*|(\\.|/)test)\\.(j|t)s$";

module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  },
  preset: "ts-jest",
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "jsdom",
  transform: {
    ".ts": "ts-jest"
  },
  testRegex: TEST_REGEX,
  testPathIgnorePatterns: ["<rootDir>/node_modules/"]
};
