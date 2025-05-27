// Definisikan interface untuk kredensial
export interface Credentials {
  companyId: string;
  username: string;
  email: string;
  password: string;
}

// EXISTING COMPANY

const companyIdExisting = "3399227";

export const ownerExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: "regresfico1007",
  email: "regresficoqa@yopmail.com",
  password: "Testing@123",
};

export const esuiteAdminHQExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: `${companyIdExisting}_estadm1`,
  email: `${companyIdExisting}_estadm1@gmail.com`,
  password: "Rhama@123",
};

export const esuiteAdminNonHQExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: `${companyIdExisting}_estadm4`,
  email: `${companyIdExisting}_estadm4@gmail.com`,
  password: "Rhama@123",
};

export const eworkAdminHQExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: `${companyIdExisting}_ewkadm1`,
  email: `${companyIdExisting}_ewkadm1@gmail.com`,
  password: "Rhama@123",
};

export const eworkAdminNonHQExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: `${companyIdExisting}_ewkadm3`,
  email: `${companyIdExisting}_ewkadm3@gmail.com`,
  password: "Rhama@123",
};

export const salesSupportHQExisting: Credentials = {
  companyId: `${companyIdExisting}`,
  username: `${companyIdExisting}_slssprt1`,
  email: `${companyIdExisting}_slssprt1@gmail.com`,
  password: "Rhama@123",
};

// NEW COMPANY

const companyIdNew = "3399227";

export const ownerNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: "regresfico1007",
  email: "regresficoqa@yopmail.com",
  password: "Testing@123",
};

export const esuiteAdminHQNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: `${companyIdNew}_estadm1`,
  email: `${companyIdNew}_estadm1@gmail.com`,
  password: "Rhama@123",
};

export const esuiteAdminNonHQNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: `${companyIdNew}_estadm4`,
  email: `${companyIdNew}_estadm4@gmail.com`,
  password: "Rhama@123",
};

export const eworkAdminHQNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: `${companyIdNew}_ewkadm1`,
  email: `${companyIdNew}_ewkadm1@gmail.com`,
  password: "Rhama@123",
};

export const eworkAdminNonHQNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: `${companyIdNew}_ewkadm3`,
  email: `${companyIdNew}_ewkadm3@gmail.com`,
  password: "Rhama@123",
};

export const salesSupportHQNew: Credentials = {
  companyId: `${companyIdNew}`,
  username: `${companyIdNew}_slssprt1`,
  email: `${companyIdNew}_slssprt1@gmail.com`,
  password: "Rhama@123",
};
