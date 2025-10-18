import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { editSegment } from "../../endpoint/segmentList";

describe.skip("User PUT Segment", () => {
  test("PUT Segmentation", async () => {
    const id = "684af725b1e297adac90615f";

    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const bodyReq = {
      segment_name: "test editttt",
      description: "",
      is_test: false,
    };

    const reseditSegment = await editSegment(id, access_token, bodyReq);
    console.log(reseditSegment.body);
  });
});
