import { env } from "../../environtment";

let environtment = env; // Env: DEV / STG / PROD

const credentialsLogin = () => {
  const payload = {
    username: "",
    email: "",
    password: "",
  };
  if (environtment == "DEV") {
    payload.username = "company_indo9048"; // Payload Dev
    payload.email = "it.qa@edot.id";
    payload.password = "Testing1234!";
  } else if (environtment == "STG") {
    payload.username = "pcg3staging@yopmail.com"; // Payload Staging
    payload.email = "stg";
    payload.password = "Password123!";
  } else if (environtment == "PROD") {
    payload.username = "lightspeed7791"; // Payload Prod
    payload.email = "prod";
    payload.password = "Edot1234!";
  }

  return payload;
};

export { credentialsLogin };
