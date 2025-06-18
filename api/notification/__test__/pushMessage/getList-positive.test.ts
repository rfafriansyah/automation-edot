import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { getMessageTemplateList } from "../../endpoint/segmentList";

describe.skip("GET Push Message List", () => {
  test("GET Push Message List", async () => {
    const params = "3";
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;
  });
});
