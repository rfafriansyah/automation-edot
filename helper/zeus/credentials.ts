import { env } from "../../environtment";

let environtment = env; // Env: DEV / STG / PROD

const credentialsLogin = () => {
  const payload = {
    username: "",
    email: "",
    password: "",
  };
  if (environtment == "DEV") {
    payload.username = "it.qa"; // Payload Dev
    payload.email = "it.qa@edot.id";
    payload.password = "it.QA2025";
  } else if (environtment == "STG") {
    payload.username = "stg"; // Payload Staging
    payload.email = "stg";
    payload.password = "stg";
  } else if (environtment == "PROD") {
    payload.username = "prod"; // Payload Prod
    payload.email = "prod";
    payload.password = "prod";
  }

  return payload;
};

export { credentialsLogin };
