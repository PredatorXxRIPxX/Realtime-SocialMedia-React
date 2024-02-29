import React, { useEffect, useState } from "react";
import InputField from "../components/inputform";
import backimage from "../assets/side-img.svg";
import { signin } from "../app/apiAppwrite";
import {Link, useNavigate} from "react-router-dom"

export default function Signin() {
  const [information, setInformation] = useState({});

  const navigate = useNavigate()

  const handlesInformation = (value, field) => {
    setInformation((prev) => ({ ...prev, [field]: value }));
  };

  const sendDetails = async () => {
    var result =  await signin(information.name,information.userName,information.email,information.password);
    if(result){
        navigate("/");
    }else{
        alert("there are an error in our server please try later")
    }
  };

  useEffect(() => {
    console.log(information);
  }, [information]);

  useEffect(() => {
    setInformation({
      name: "",
      userName: "",
      email: "",
      password: "",
    });
  }, []);

  return (
    <>
      <div className="bg-[#111] grid grid-cols-2 gap-2 items-center h-screen text-white">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl text-center">Let's start by Sign you in</h1>
          <p className="font-bold text-xl text-gray-400 py-5 ">Enter your details. Be grateful; something big is coming</p>
          <form>
            <InputField label={"name"} isPassword={false} onDetailsChanges={handlesInformation} />
            <InputField label={"userName"} isPassword={false} onDetailsChanges={handlesInformation} />
            <InputField label={"email"} isPassword={false} onDetailsChanges={handlesInformation} />
            <InputField label={"password"} isPassword={true} onDetailsChanges={handlesInformation} />
          </form>
          <button className="px-6 py-2 rounded text-center font-bold text-black bg-white my-6" onClick={sendDetails}>Sign in</button>
          <p>Already have an account <Link className="text-violet-500" to={"/Auth/login"}>Log in</Link></p>
        </div>
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url(${backimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            textAlign: "center",
          }}
        ></div>
      </div>
    </>
  );
}
