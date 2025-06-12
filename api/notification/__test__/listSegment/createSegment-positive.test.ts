import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { createSegment } from "../../endpoint/segmentList";

describe("User Create Segment", () => {
  test("POST Segmentation", async () => {
    const bodyReq = {
      segment_name: "segment_1",
      description: "",
      is_test: false,
    };

    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    console.log("access token");
    console.log(access_token);

    const resCreateSegment = await createSegment(access_token, bodyReq);
    console.log(resCreateSegment.body);
  });
});
