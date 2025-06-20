import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { deleteTemplateMessage } from "../../endpoint/segmentList";

describe.skip("DELETE Template Message", () => {
  test("DELETE Template Message", async () => {
    // Query Params
    const queryParams = {
      ids: "684bf429c8c1432c64bec184",
    };
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const resdeleteTemplateMessage = await deleteTemplateMessage(
      queryParams,
      access_token
    );
    console.log(resdeleteTemplateMessage.body);
  });
});
