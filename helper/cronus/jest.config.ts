export default {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"], // atau './jest.setup.ts' jika ingin custom
  testMatch: ["**/?(*.)+(test).[tj]s?(x)"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
};
