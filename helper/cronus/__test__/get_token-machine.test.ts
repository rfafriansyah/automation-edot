import dotenv from "dotenv";
dotenv.config();
import { cronusLogin } from "../endpoint/login";
import { saveTokenToJsonFile, StoredTokenData } from "../token/tokenStorage";
describe("Generate Token Machine ", () => {
  test("Generate Token Machine", async () => {
    const payload = {
      client_id: "edot-automation",
      client_secret: "LeLl7PXTuboT0RF4",
      grant_type: "client_credentials",
      scope: "openid offline_access",
      resource: "",
    };

    const restokenMachineCronus = await cronusLogin(payload);
    const access_token = restokenMachineCronus.body.access_token;
    console.log("token-machine", restokenMachineCronus.body);

    // Siapkan data untuk disimpan ke JSON
    const tokenData: StoredTokenData = {
      // <--- Sekarang StoredTokenData sudah terdefinisi dari import
      access_token: access_token,
    };

    // Panggil fungsi yang diimpor untuk menyimpan token
    saveTokenToJsonFile(tokenData, "helper/cronus/token/token_machine.json"); // Simpan ke file ini
  });
});
