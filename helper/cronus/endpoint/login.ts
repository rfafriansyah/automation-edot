import supertest from "supertest";
import dotenv from "dotenv";
import { loginCronusPayload } from "../interfaces/login";
dotenv.config();
const cronus = process.env.API_CRONUS_DEV;
const url = supertest(cronus!);

export const cronusLogin = (payload: any) =>
  url
    .post("/oidc/token")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send(payload)
    .expect(200);
