import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getMessageTemplateDetail } from "../../endpoint/segmentList";

describe("GET Template Message Detail", () => {
  test("GET Template Message Detail", async () => {
    // Params
    const params = {
      limit: 2,
      ids: "6848f6d78d8b223ac41ef4bc",
    };
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resgetMessageTemplateDetail = await getMessageTemplateDetail(
      params.limit,
      params.ids,
      access_token
    );
    console.log(resgetMessageTemplateDetail.body);
  });
});
