import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus-login/tokenStorage";
import { deleteTemplateMessage } from "../../endpoint/segmentList";

describe("DELETE Template Message", () => {
  test("DELETE Template Message", async () => {
    // Query Params
    const queryParams = {
      ids: "684b0489b1e297adac906161",
    };
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "auth_credentials.json"
    )?.access_token;

    const resdeleteTemplateMessage = await deleteTemplateMessage(
      queryParams,
      access_token
    );
    console.log(resdeleteTemplateMessage.body);
  });
});
