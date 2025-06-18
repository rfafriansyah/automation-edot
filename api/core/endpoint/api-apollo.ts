import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const api_apollo = process.env.API_APOLLO_DEV;
const url = supertest(api_apollo!);

// API-APOLLO
// Check Existence
export const checkExistence = (token: any, payload: any) =>
  url
    .post("/api/v1/check-existence")
    .set("content-type", "application/json")
    .set("authorization", `Bearer ${token}`)
    .send(payload)
    .expect(200);

export const nabatiCompany = (token: any) =>
  url.get(`/api/v1/nabati-company`).set("authorization", `Bearer ${token}`);
