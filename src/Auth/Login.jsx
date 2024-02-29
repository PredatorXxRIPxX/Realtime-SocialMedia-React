import React, { useContext, useEffect, useState } from "react";
import InputField from "../components/inputform";
import backimage from "../assets/side-img.svg";
import {Link, useNavigate} from "react-router-dom"
import { login } from "../app/apiAppwrite";
import myContext from "../data/data";


export default function Login() {


  const [information, setInformation] = useState({});
  const navigate = useNavigate()
  const {user,setUser} = useContext(myContext);
  const handlesInformation = (value, field) => {
    setInformation((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    console.log(information);
  }, [information]);

  useEffect(() => {
    setInformation({
      email: "",
      password: "",
    });
  }, []);

  const tryingtoEnter = async() =>{
    const result = await login(information.email,information.password);
    console.log(result);
    setUser(result);
    console.log(user)
    navigate("/user")
  }

  return (
    <>
      <div className="bg-[#111] grid grid-cols-2 gap-2 items-center h-screen text-white">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl text-center">Let's start by Login you in</h1>
          <p className="font-bold text-xl text-gray-400 py-5 ">Enter your details. Be secure we gona log in you into ower Universe</p>
          <form>
            <InputField label={"email"} isPassword={false} onDetailsChanges={handlesInformation} />
            <InputField label={"password"} isPassword={true} onDetailsChanges={handlesInformation} />
          </form>
          <button className="px-6 py-2 rounded text-center font-bold text-black bg-white my-6" onClick={tryingtoEnter}>Log in</button>
          <p>Don't have an account let <Link className="text-violet-500" to={"/Auth/signin"}>Sign you in</Link></p>
        </div>
        <div className="h-full w-full  " style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}>
        </div>
      </div>
    </>
  );
}
