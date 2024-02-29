import React from "react";

export default function Messages(){
    return (
        <div className=" col-span-2 flex flex-col items-start text-white bg-[#111] p-4">
            <h1 className="text-5xl font-fold text-white m-4">Messages</h1>
            <input  className="rounded-2xl text-white p-2 bg-[#222] m-4" type="search" placeholder="looking for a friend"/>
            <div className=" text-center rounded-xl p-4 bg-[#222] w-full h-full">
                <p>you fiend here your contact</p>
            </div>
        </div>
    )
}