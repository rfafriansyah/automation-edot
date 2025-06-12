import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getMessageTemplateList } from "../../endpoint/segmentList";

describe.skip("CREATE Push Message", () => {
  test("CREATE Push Message", async () => {
    const params = "3";
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;
  });
});
