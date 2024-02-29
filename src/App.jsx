import React, { useState } from "react";
import Auth from "./Auth/Auth";
import Signin from "./Auth/Signin";
import Login from "./Auth/Login";
import { Route, Routes } from "react-router-dom";
import UserPage from "./view/userPage";
import MyContext from "./data/data"; 
import Home from "./view/home";
import NavHome from "./components/navHome";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Auth/login" element={<Login />} />
          <Route path="/Auth/signin" element={<Signin />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}
