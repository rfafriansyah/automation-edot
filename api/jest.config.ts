// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  projects: [
    {
      displayName: "sodagr",
      testMatch: ["**/sodagr/__test__/**/*.test.ts"],
      preset: "ts-jest",
      testEnvironment: "node",
      setupFilesAfterEnv: ["./jest.setup.ts"],
    },
  ],
  // preset: "ts-jest", // Agar Jest menggunakan ts-jest untuk mengonversi TypeScript
  // testEnvironment: "node", // Gunakan lingkungan Node.js untuk pengujian
  // testMatch: [
  //   "**/sodagr/__test__/**/*.test.ts", // Match any test file inside __test__ folder
  // ], // Tentukan lokasi file pengujian
  reporters: [
    "default",
    [
      "../node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report",
        testResultsProcessor: "./node_modules/jest-html-reporter",
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};

export default config;
