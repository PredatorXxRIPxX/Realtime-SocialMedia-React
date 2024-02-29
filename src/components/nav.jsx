import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <>
            <nav className=" p-10 w-full h-5 flex items-center justify-between absolute top-0  z-10 bg-[rgba(0,0,0,0.8)]">
                <h1 className=" text-5xl text-white font-bold">Be Real.</h1>
                <ul className="flex list-none items-center">
                    <li className="font-bold text-white text-xl items-center mx-5 cursor-pointer"><Link to={"/Auth/login"}>Log in</Link></li>
                    <li className="font-bold text-black bg-white rounded-3xl p-4 text-xl items-center mx-5 transition-all duration-50 ease-linear hover:border-white hover:border-2 hover:bg-transparent hover:text-white cursor-pointer"><Link to={"/Auth/signin"}>Get in Started</Link></li>
                </ul>
            </nav>
        </>
    )
}