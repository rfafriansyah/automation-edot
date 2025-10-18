import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { getMessageTemplateList } from "../../endpoint/segmentList";

describe.skip("GET Push Message Detail", () => {
  test("GET Push Message Detail", async () => {
    const params = "3";
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;
  });
});
