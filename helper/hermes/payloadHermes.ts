import { faker } from "@faker-js/faker";
import { fakers } from "../../helper/generatePayload";

const payloadCreateIndonesia = () => {
  return {
    companyNameIndo: faker.company.name(),
    emailIndo: faker.internet.email(),
    phoneIndo: "812442434213",
    addressIndo: "Jalan. Testing No. 123",
    countryIndo: "Indonesia",
    dataIndonesia: {
      province: "PAPUA BARAT",
      city: "KAB KAIMANA",
      district: "KAMBRAU",
      subdistrict: "WAHO",
    },
    branch: "Branch HQ Testing",
  };
};

const payloadCreateMalaysia = () => {
  return {
    companyNameMalay: "RHM Malaysia Testing",
    emailMalay: "companymalay@gmail.com",
    phoneMalay: "812442434213",
    addressMalay: "Jalan. Testing No. 123",
    countryMalay: "Malaysia",
    dataMalaysia: {
      state: "Kelantan",
      city: "Kota Bharu",
      location: "Bangunan MGU",
      postalCode: "15000",
    },
    branch: "Branch HQ Testing",
  };
};
const payloadCreatePhilippine = () => {
  return {
    companyNamePhilippine: "RHM Philippine Testing",
    emailPhilippine: "companypinoy@gmail.com",
    phonePhilippine: "812442434213",
    addressPhilippine: "Jalan. Testing No. 123",
    countryPhilippine: "Philippines",
    dataPhilippine: {
      region: "Region I (Ilocos Region)",
      province: "Ilocos Norte",
      city: "Bacarra",
      bangaray: "Cabaruan",
    },
    branch: "Branch HQ Testing",
  };
};

const payloadGeneralInfo = () => {
  const length = faker.number.int({ min: 8, max: 9 });
  const randomDigits = faker.string.numeric(length);

  return {
    name: fakers.randomName,
    username: faker.internet.username(),
    email: fakers.randomEmail,
    phone: `8${randomDigits}`,
    password: "Rhama@123",
    employeeID: "Rhama123",
  };
};

export {
  payloadCreateIndonesia,
  payloadCreateMalaysia,
  payloadCreatePhilippine,
  payloadGeneralInfo,
};
