import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getListSegment } from "../../endpoint/segmentList";

describe.skip("User GET List Segment", () => {
  test("GET Segmentation List", async () => {
    const params = {
      limit: 10,
    };

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resGetListSegment = await getListSegment(params, access_token);
    console.log(resGetListSegment.body);
  });
});
