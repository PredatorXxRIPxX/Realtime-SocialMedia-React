import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { ReactTyped } from "react-typed";
import backimage from "../assets/side-img.svg";

export default function Auth() {
  return (
    <>
      <Nav />
      <div
        className="flex flex-col justify-center items-center bg-blur"
        style={{
          backgroundImage: `url(${backimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1 className="font-bold text-6xl tracking-wide">Ta dose quotidienne de vie réelle.</h1>
        <h4>
          <ReactTyped
            className="text-violet-500 font-bold text-4xl block my-6"
            strings={["Be Real.", "Be Friendly", "Be A Part", "Be Productive"]}
            typeSpeed={120}
            backSpeed={180}
            loop
          ></ReactTyped>
        </h4>
        <Link className="font-bold bg-white rounded-xl p-3 text-black text-2xl text-center my-3" to={"/Auth/signin"}>
          Join now
        </Link>
      </div>
    </>
  );
}
