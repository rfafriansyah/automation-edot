import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { getUsersSegment } from "../../endpoint/segmentList";

describe("GET Users Segment", () => {
  test("GET Users Segment", async () => {
    const ids = "684a8f53a3acd6a5dffc73d6";
    const params = 2;

    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resgetUsersSegment = await getUsersSegment(ids, params, access_token);

    console.log(resgetUsersSegment.body);
  });
});
