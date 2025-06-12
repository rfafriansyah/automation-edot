import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getMessageTemplateDetail } from "../../endpoint/segmentList";

describe.skip("GET Template Message Detail", () => {
  test("GET Template Message Detail", async () => {
    // Params
    const params = {
      limit: 2,
      ids: "684afe81b1e297adac906160",
    };
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resgetMessageTemplateDetail = await getMessageTemplateDetail(
      params,
      access_token
    );
    console.log(resgetMessageTemplateDetail.body);
  });
});
