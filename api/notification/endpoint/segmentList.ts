import supertest from "supertest";
import dotenv from "dotenv";
import { SegmentPayload } from "../interfaces/segmentList";
dotenv.config();
const notification = process.env.NOTIFICATION_DEV;
const url = supertest(notification!);

export const createSegment = (token: string, payload: SegmentPayload) =>
  url
    .post("/api/v1/segmentation")
    .set("Content-Type", "application/json")
    .auth("Authorization", `Bearer ${token}`)
    .send(payload);
