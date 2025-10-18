import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { checkExistence } from "../../endpoint/api-apollo";

describe("Check Existence", () => {
  test("Check Existence", async () => {
    // GET Token
    const access_token =
      loadTokenFromJsonFileToken("token_machine.json")?.access_token;

    const payload = { username: "it.qa" };

    const rescheckExistence = await checkExistence(access_token, payload);
    console.log(rescheckExistence.body);
  });
});
