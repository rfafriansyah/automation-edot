import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFile } from "../../../../helper/cronus/token/tokenStorage";
import { editTemplateMessage } from "../../endpoint/segmentList";

describe.skip("EDIT Template Message", () => {
  test("EDIT Template Message", async () => {
    // Params
    const params = {
      ids: "684afe81b1e297adac906160",
    };
    // GET Token
    const access_token = loadTokenFromJsonFile(
      "token_edot-miniprogram-mobileapp.json"
    )?.access_token;

    // Body Request
    const bodyReq = {
      title: "Rhama AT API Edit",
      body: "Rhama AT API Edit",
      deeplink: "",
      name: "Rhama AT API Edit",
      image: "",
    };

    const reseditTemplateMessage = await editTemplateMessage(
      params.ids,
      access_token,
      bodyReq
    );
    console.log(reseditTemplateMessage.body);
  });
});
