import {Account,Avatars,Databases,Client,Storage} from "appwrite";

export const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT_ID).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

export const account=new Account(client);
export const avatar = new Avatars(client);
export const database = new Databases(client);
export const storage = new Storage(client);