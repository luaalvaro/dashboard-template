import { Client, Account } from "appwrite";

if (
  !process.env.NEXT_PUBLIC_APPWRITE_API_URL ||
  !process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID
) {
  throw new Error("Appwrite API URL and Project ID must be provided");
}

export const client = new Client();

const APPWRITE_API_URL = process.env.NEXT_PUBLIC_APPWRITE_API_URL;
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;

client.setEndpoint(APPWRITE_API_URL).setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export { ID } from "appwrite";
