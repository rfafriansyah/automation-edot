import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName();
const randomAnimal = faker.animal.bear();
const randomCompany = faker.company.name();
const randomPhone = faker.phone.number();
const randomEmail = faker.internet.email();
const randomAddress = faker.location.streetAddress();

const fakers = {
  randomName: faker.person.fullName(),
  randomDefinitions: faker.definitions,
  randomAnimal: faker.animal.bear(),
  randomCompany: faker.company.name(),
  randomPhone: faker.phone.number(),
  randomEmail: faker.internet.email(),
  randomAddress: faker.location.streetAddress(),
};

export { fakers };
