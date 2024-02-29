import { ID, Query } from "appwrite";
import { account, database } from "./appwriteConfig";

export const login = async (email, password) => {
  try {
    if (email !== "" && password !== "") {
      const response = await account.createEmailSession(email, password);
      console.log(response);
      return response;
    } else {
      throw new Error("Please enter your information.");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signin = async (name, username, email, password) => {
  try {
    if (name !== "" && username !== "" && email !== "" && password !== "") {
      const response = await account.create(
        ID.unique(),
        email,
        password,
        name,
        username
      );
      console.log(response);
      return true;
    } else {
      throw new Error("Please fill in all the fields.");
    }
  } catch (error) {
    console.log(error);
    // Handle error or notify the user
    return false;
  }
};

export const getMessages = async () => {
  try {
    const response = await database.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASES_ID,
      import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID,
      [
        Query.orderAsc("$createdAt"),
        Query.limit(10),
      ]
      
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const createDoc = async (message,accountid,accountname) => {

  try {
    let payload = {
        user_id:accountid,
        user_name:accountname,
        textSend:message,
    }
    const response = await database.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASES_ID,
      import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID,
      ID.unique(),
      payload
    );
    return response;
  } catch (error) {
    console.log(error);
    // Handle error or notify the user
    return null;
  }
};


export const deleteDocuments = async (documentsID) =>{
  try {
    var response = await database.deleteDocument(import.meta.env.VITE_APPWRITE_DATABASES_ID,import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID,documentsID);
    return response    
  } catch (error) {
    console.log(error);
  }
}