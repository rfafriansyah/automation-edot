import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const api_permission = process.env.API_PERMISSION_DEV;
const url = supertest(api_permission!);

// Read
export const read = (token: any, payload: any) =>
  url
    .post("/api/v1/iam/my-permission/read")
    .set("Authorization", `Bearer ${token}`)
    .send(payload);
