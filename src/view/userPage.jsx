import React, { useEffect, useState } from "react";
import { account,database } from "../app/appwriteConfig";
import NavHome from "../components/navHome";
import {Link, Route,Routes} from "react-router-dom"
import Home from "./home.jsx"
import Messages from "./messages.jsx";
import ContactPersone from "./contactPersone.jsx";


export default function userSection(props){
    const [details,setDetails] = useState()
    useEffect(()=>{
        setDetails(account.getSession(props.id))
        console.log("the user details are"+details);
    },[])

    return (
        <div className="w-full h-screen grid grid-cols-8">  

            <NavHome />
            <Messages/>
            <ContactPersone />
        </div>
    )
}