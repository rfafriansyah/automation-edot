import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { getMessageTemplateList } from "../../endpoint/segmentList";

describe.skip("GET Template Message", () => {
  test("GET Template Message", async () => {
    const params = "3";
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const resgetMessageTemplateList = await getMessageTemplateList(
      params,
      access_token
    );

    console.log(resgetMessageTemplateList.body);
  });
});
