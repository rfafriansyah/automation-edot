import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { deleteSegment } from "../../endpoint/segmentList";

describe.skip("User DELETE Segment", () => {
  test("DELETE Segmentation", async () => {
    const ids = "684af725b1e297adac90615f";

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const resdeleteSegment = await deleteSegment(ids, access_token);
    console.log(resdeleteSegment.body);
  });
});

//