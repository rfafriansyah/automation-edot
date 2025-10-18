import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { nabatiCompany } from "../../endpoint/api-apollo";

describe("nabati-company", () => {
  test("nabati-company", async () => {
    // GET Token
    const access_token =
      loadTokenFromJsonFileToken("token_machine.json")?.access_token;

    // HIT API
    const resnabatiCompany = await nabatiCompany(access_token);
    console.log(`nabati-company`, resnabatiCompany.body);
  });
});
