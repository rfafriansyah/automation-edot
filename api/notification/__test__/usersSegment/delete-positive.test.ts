import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { deleteUsersSegment } from "../../endpoint/segmentList";

describe("DELETE Users Segment", () => {
  test("DELETE Users Segment", async () => {
    const ids = "684a8f53a3acd6a5dffc73d6";

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const bodyReq = {
      user_ids: "683ebdeb911a356a926a32d6",
    };

    const resdeleteUsersSegment = await deleteUsersSegment(
      ids,
      access_token,
      bodyReq
    );

    console.log(resdeleteUsersSegment.body);
  });
});
