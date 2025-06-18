import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { nabati_company } from "../../endpoint/api-apollo";

describe("nabati-company", () => {
  test("nabati-company", async () => {
    // GET Token
    const access_token =
      loadTokenFromJsonFile("token_machine.json")?.access_token;

    // HIT API
    const resnabati_company = await nabati_company(access_token);
    console.log(`nabati-company`, resnabati_company.body);
  });
});
