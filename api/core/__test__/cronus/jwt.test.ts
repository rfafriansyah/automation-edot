import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/token/tokenStorage";
import { jwt } from "../../endpoint/cronus/cronus";

describe("JWT Hermes", () => {
  test("JWT Hermes", async () => {
    // GET Token
    const access_token =
      loadTokenFromJsonFile("hermes-webapp.json")?.access_token;

    const resjwt = await jwt(access_token);
    console.log(resjwt.body);
  });
});
