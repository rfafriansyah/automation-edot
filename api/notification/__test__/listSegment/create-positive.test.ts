import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { createSegment } from "../../endpoint/segmentList";

describe.skip("User Create Segment", () => {
  test("POST Segmentation", async () => {
    const bodyReq = {
      segment_name: "test create ATTTT",
      description: "",
      is_test: false,
    };

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const resCreateSegment = await createSegment(access_token, bodyReq);
    console.log(resCreateSegment.body);
  });
})
