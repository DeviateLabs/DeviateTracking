module.exports = {
  testMatch: ["**/tests/**/**.test.js"],
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jestSetup.js"],
  modulePaths: ["<rootDir>/src"],
};
