import dotenv from "dotenv";
dotenv.config();
import { cronusLogin } from "../endpoint/login";
import { saveTokenToJsonFile, StoredTokenData } from "../token/tokenStorage";
describe("Generate Token company-webapp-saas ", () => {
  test("Generate Token company-webapp-saas", async () => {
    const payload = {
      client_id: "company-webapp-saas",
      client_secret: "WITyGu4toXD8mXeo",
      workspace: "336999",
      username: "it.qa",
      password: "it.QA2025",
      grant_type: "organization",
      scope: "openid offline_access profile",
      resource: "",
    };

    const restokenMachineCronus = await cronusLogin(payload);
    const access_token = restokenMachineCronus.body.access_token;
    console.log("token-company-webapp-saas", restokenMachineCronus.body);

    // Siapkan data untuk disimpan ke JSON
    const tokenData: StoredTokenData = {
      // <--- Sekarang StoredTokenData sudah terdefinisi dari import
      access_token: access_token,
    };

    // Panggil fungsi yang diimpor untuk menyimpan token
    saveTokenToJsonFile(
      tokenData,
      "helper/cronus/token/token_company-webapp-saas.json"
    ); // Simpan ke file ini
  });
});
