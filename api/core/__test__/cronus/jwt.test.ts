import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { jwt } from "../../endpoint/cronus";

describe("JWT Hermes", () => {
  test("JWT Hermes", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_hermes-webapp.json"
    )?.access_token;

    const resjwt = await jwt(access_token);
    console.log(resjwt.body);
  });

  test("JWT Esuite", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_company-webapp-saas.json"
    )?.access_token;

    const resjwt = await jwt(access_token);
    console.log(resjwt.body);
  });
});
