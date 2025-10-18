import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const api_esuite = process.env.API_ESUITE_DEV;
const url = supertest(api_esuite!);

// Create Customer NOO v4
export const createCustomerNOO = (token: any, payload: any) =>
  url
    .post("/sales/v4/customers")
    .set("auth_type", "v3")
    .set("app_name", "sfa-service")
    .set("authorization", `Bearer ${token}`)
    // .expect(200);
