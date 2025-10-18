import dotenv from "dotenv";
dotenv.config();
import { loadTokenFromJsonFileToken } from "../../../../helper/cronus/token/tokenStorage";
import { payloadCustomer } from "../../payload/payloadCustomerNOO.json";
import { createCustomerNOO } from "../../endpoint/esuite";

describe("API Read", () => {
  test("Create Customer NOO", async () => {
    // GET Token
    const access_token = loadTokenFromJsonFileToken(
      "token_hermes-webapp.json"
    )?.access_token;

    // payload
    const payload = payloadCustomer;
    console.log("ini payloadddd", payload);

    const resCreateNOO = await createCustomerNOO(access_token, payload);
    console.log(`resssss`, resCreateNOO.body);
  });
});
