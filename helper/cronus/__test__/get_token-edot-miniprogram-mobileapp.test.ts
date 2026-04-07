import dotenv from "dotenv";
dotenv.config();
import { cronusLogin } from "../endpoint/login";
import { saveTokenToJsonFile, StoredTokenData } from "../token/tokenStorage";
const username = process.env.usernameCronus;
const password = process.env.passwordCronus;
describe("User Success Login Cronus ", () => {
  test("Get Token Cronus", async () => {
    const payloadLogin = {
      client_id: "edot-miniprogram-mobileapp",
      client_secret: "9aAMst0dTChxAi9I", // Use a test secret
      username: "it.qa",
      password: "it.QA2025",
      grant_type: "password",
      scope: "openid offline_access profile",
      resource: "", // As seen in your image
    };

    const resCronusLogin = await cronusLogin(payloadLogin);
    const access_token = resCronusLogin.body.access_token;
    console.log(
      "token-edot-miniprogram-mobileapp",
      resCronusLogin.body.access_token
    );

    // Siapkan data untuk disimpan ke JSON
    const tokenData: StoredTokenData = {
      // <--- Sekarang StoredTokenData sudah terdefinisi dari import
      access_token: access_token,
    };

    // Panggil fungsi yang diimpor untuk menyimpan token
    saveTokenToJsonFile(
      tokenData,
      "helper/cronus/token/token_edot-miniprogram-mobileapp.json"
    ); // Simpan ke file ini
  });
});
