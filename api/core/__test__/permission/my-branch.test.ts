import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { myBranch } from "../../endpoint/permission";

describe("API Read", () => {
  test("API Read", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_company-webapp-saas.json"
    )?.access_token;

    // HIT API
    const resmyBranch = await myBranch(access_token);
    console.log(`Res my-branch`, resmyBranch.body);
  });
});
