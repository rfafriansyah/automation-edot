import supertest from 'supertest';
import dotenv from 'dotenv';
dotenv.config();

const apolloClient = supertest(process.env.HERMES_BASEURL!);

export const getListVehicleMobilization = (token: any, query: any) =>
  apolloClient
// .get(`/api/v1/ims/allocation/vehicleMobilizations`)
// .set('Content-Type', 'application/json')
// .auth(token, { type: 'bearer' })
// .query(query);
