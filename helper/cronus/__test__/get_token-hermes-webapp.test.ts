import dotenv from "dotenv";
dotenv.config();
import { cronusLogin } from "../endpoint/login";
import { saveTokenToJsonFile, StoredTokenData } from "../token/tokenStorage";
describe("Generate Token Machine ", () => {
  test("Generate Token Machine", async () => {
    const payload = {
      client_id: "hermes-webapp",
      client_secret: "VyX7dWtvc0V5tOpg",
      username: "adminwings4303",
      password: "Testing1234!",
      grant_type: "password",
      scope: "openid offline_access",
      resource: "",
    };

    const restokenMachineCronus = await cronusLogin(payload);
    const access_token = restokenMachineCronus.body.access_token;
    console.log("token-hermes-webapp", restokenMachineCronus.body.access_token);

    // Siapkan data untuk disimpan ke JSON
    const tokenData: StoredTokenData = {
      // <--- Sekarang StoredTokenData sudah terdefinisi dari import
      access_token: access_token,
    };

    // Panggil fungsi yang diimpor untuk menyimpan token
    saveTokenToJsonFile(
      tokenData,
      "helper/cronus/token/token_hermes-webapp.json"
    ); // Simpan ke file ini
  });
});
