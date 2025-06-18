import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
const api_permission = process.env.API_PERMISSION_DEV;
const url = supertest(api_permission!);

// read
export const read = (token: any, payload: any) =>
  url
    .post("/api/v1/iam/my-permission/read")
    .set("Authorization", `Bearer ${token}`)
    .send(payload)
    .expect(200);

// my-branch
export const myBranch = (token: any) =>
  url
    .get("/api/v2/my-branch")
    .set("Authorization", `Bearer ${token}`)
    .expect(200);
