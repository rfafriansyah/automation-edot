import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getDetailSegment } from "../../endpoint/segmentList";

describe.skip("User GET Detail Segment", () => {
  test("GET Segmentation Detail", async () => {
    const ids = "684a8f53a3acd6a5dffc73d6";

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resGetDetailSegmentation = await getDetailSegment(ids, access_token);
    console.log(resGetDetailSegmentation.body);
  });
});
