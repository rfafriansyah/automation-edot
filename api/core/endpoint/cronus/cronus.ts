import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const api_cronus = process.env.API_CRONUS_DEV;
const url = supertest(api_cronus!);

// API-APOLLO
// Check Existence
export const jwt = (token: any) =>
  url
    .get("/jwt")
    .set("authorization", `Bearer ${token}`)
    .set("origin", "https://hermes-dashboard.edot-dev.com")
    .set("referer", "https://hermes-dashboard.edot-dev.com/")
    .expect(200);
