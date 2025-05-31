import { faker } from "@faker-js/faker";

const randomName = faker.person.fullName(); // "Alice Johnson"
const company = faker.company.name(); // "Global Corp"
const phone = faker.phone.number(); // "(555) 123-4567"
const email = faker.internet.email(); // "alice.johnson@example.com"
const address = faker.location.streetAddress(); // "123 Maple Street"

console.log({ randomName, company, phone, email, address });
