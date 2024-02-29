import React, { useRef, useState } from "react";

export default function InputField(props) {
  const [details, setDetails] = useState("");
  const inputs = useRef();

  const handleChanges = (event) => {
    const value = event.target.value;
    setDetails(value);
    console.log(value); // Log the value directly
    props.onDetailsChanges(value, props.label);
  };

  return (
    <div className="flex flex-col justify-start items-start text-white w-full">
      <h1>{props.label}</h1>
      <input
        className="p-3 rounded-md bg-[#222] font-bold text-white my-2 w-full"
        type={props.isPassword ? "password" : "text"}
        ref={inputs}
        onChange={handleChanges}
      />
    </div>
  );
}
