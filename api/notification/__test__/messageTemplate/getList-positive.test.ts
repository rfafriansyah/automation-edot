import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { getMessageTemplateList } from "../../endpoint/segmentList";

describe.skip("GET Template Message", () => {
  test("GET Template Message", async () => {
    const params = "3";
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const resgetMessageTemplateList = await getMessageTemplateList(
      params,
      access_token
    );

    console.log(resgetMessageTemplateList.body);
  });
});
