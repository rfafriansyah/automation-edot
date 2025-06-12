import supertest from "supertest";
import dotenv from "dotenv";
import { SegmentPayload } from "../interfaces/segmentList";
dotenv.config();
const notification = process.env.NOTIFICATION_DEV;
const url = supertest(notification!);

// POST Segmentation
export const createSegment = (token: any, payload: any) =>
  url
    .post("/api/v1/segmentation")
    .set("content-type", "application/json")
    .set("authorization", `Bearer ${token}`)
    .send(payload);

// GET List Segmentation
export const getListSegment = (limit: any, token: any, params: any) =>
  url
    .get(`/api/v1/segmentation?limit=${limit}`)
    .set("content-type", "application/json")
    .auth("authorization", `Bearer ${token}`)
    .send(params);

// GET Detail Segmentation
export const getDetailSegment = (ids: any, token: any, payload: any) =>
  url
    .post(`/api/v1/segmentation?ids=${ids}`)
    .set("content-type", "application/json")
    .auth("authorization", `Bearer ${token}`)
    .send(payload);

// EDIT Segmentation
export const editSegment = (id: any, token: any, payload: any) =>
  url
    .post(`/api/v1/segmentation/${id}`)
    .set("content-type", "application/json")
    .auth("authorization", `Bearer ${token}`)
    .send(payload);

// DELETE Segmentation
export const deleteSegment = (ids: any, token: any, params: any) =>
  url
    .post(`/api/v1/segmentation?ids=${ids}`)
    .set("content-type", "application/json")
    .auth("authorization", `Bearer ${token}`)
    .send(params);
