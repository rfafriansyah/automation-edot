import { env } from "../../environtment";

let environtment = env; // Env: DEV / STG / PROD

const credentialsLogin = () => {
  const payload = {
    username: "",
    email: "",
    password: "",
  };
  if (environtment == "DEV") {
    payload.username = "regresfico1007"; // Payload Dev
    payload.email = "it.qa@edot.id";
    payload.password = "Testing@123";
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
