import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { read } from "../../endpoint/permission";

describe("API Read", () => {
  test("API Read", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_hermes-webapp.json"
    )?.access_token;

    // Payload
    const payload = {
      services: [
        "esuite_role:companyplatform_admin#assigned_to",
        "esuite_role:companyplatform_maintainer#assigned_to",
        "esuite_role:companyplatform_user_336841_generalmanager#assigned_to",
        "esuite_role:companyplatform_user_336841_salesadmin#assigned_to",
        "esuite_role:companyplatform_user_336841_eworkadmin#assigned_to",
        "esuite_service:companywebapp_ui_sfa_salesmanactivity_targetandachievement#access",
      ],
    };

    const resread = await read(access_token, payload);
    console.log(`resssss`, resread.body);
  });
});
