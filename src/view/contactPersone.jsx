import React, { useEffect, useRef, useState } from "react";
import { getMessages, createDoc, deleteDocuments } from "../app/apiAppwrite";
import { account, client } from "../app/appwriteConfig";

export default function ContactPersone() {
  const [messages, setMessages] = useState([]);
  const inputdata = useRef();
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
    const unsbscribe = client.subscribe([`databases.${import.meta.env.VITE_APPWRITE_DATABASES_ID}.collections.${import.meta.env.VITE_APPWRITE_MESSAGE_COLLECTION_ID}.documents.`],response=>{
      console.log(response)
      if(response.events[1].includes("databases.*.collections.*.documents.*.update")){
        console.log("message was updated")
      }
      if(response.events[1].includes("databases.*.collections.*.documents.*.create")){
        setMessages(prevState =>[response.payload,...prevState])

        console.log("message was created")
      }
      if(response.events[1].includes("databases.*.collections.*.documents.*.delete")){
        setMessages(prevState =>prevState.filter((message)=>message.$id!==message.payload.$id))

        console.log("message was deleted")
      }
    })

    return () =>{
      unsbscribe();
    }
  }, []);

  const fetchData = async () => {
  try {
    const tmp = await getMessages();
    console.log(tmp);
    setMessages((prevMessages) => [...prevMessages,...tmp.documents]);
    console.log(messages);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  function changeHandler() {
    setData(inputdata.current.value);
  }

  async function sendData() {
  try {
    const accountid = (await account.get()).$id;
    const accountName = (await account.get()).name;
    await createDoc(data, accountid, accountName);
    inputdata.current.value = "";
    fetchData();
  } catch (error) {
    console.error("Error sending data:", error);
  }
}

  async function goDelete(idoc) {
  try {
    const response = await deleteDocuments(idoc);
    console.log(response);
    fetchData();
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}

  return (
    <div className="bg-[#222] w-full h-screen flex flex-col col-span-5 justify-between">
      <div>
        <h1 className="font-bold text-white text-xl p-4">Omar</h1>
      </div>

      <div className="text-white  rounded-sm overflow-y-auto">
        {messages.length===0?<p>nothing found</p>:messages.map(
          (el)=><p className="rounded-xl bg-violet-500 font-bold p-4 my-2" key={el.$id} onClick={() => goDelete(el.$id)}>{el.textSend}</p>
          )
        }
      </div>
      
      <div className="w-full flex items-center justify-between p-4 bg-[#111]">
        <input
          ref={inputdata}
          maxLength={1500}
          onChange={changeHandler}
          type="text"
          placeholder="Type your message"
          className="w-full bg-[#222] text-white rounded-lg p-2 mx-4"
        />
        <button
          onClick={sendData}
          className="bg-violet-500 text-white rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
