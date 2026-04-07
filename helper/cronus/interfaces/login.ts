export interface loginCronusPayload {
  client_id: string;
  client_secret: string;
  grant_type: string;
  resource: string;
  scope: string;
  username: string;
  password: string;
}
