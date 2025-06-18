import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { createMessageTemplate } from "../../endpoint/segmentList";

describe.skip("CREATE Template Message", () => {
  test("CREATE Template Message", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    const bodyReq = {
      title: "test AT API Rhamaaaa",
      body: "test AT API Rhama",
      deeplink: "",
      name: "test AT API Rhama Satuuuu",
      image: "",
    };

    const rescreateMessageTemplate = await createMessageTemplate(
      access_token,
      bodyReq
    );
    console.log(rescreateMessageTemplate.body);
  });
});
