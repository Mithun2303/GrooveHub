import React from "react";
import logo from "./img/logo.png";
import { useState } from "react";
import Gethost from "./host";
import axios from "axios";
import { Link } from "react-router-dom";
function Forgetpassword1() {
  const host = Gethost();
  const [email,setemail] = useState("");
  const [emailcheck,setemailcheck] = useState(false);
  const [errormessage,seterrormessage] = useState("");
  function handleClick()
  {
    axios.post(host+'/checkemail').then(
      (res) => {
        if(res.data.status_code == 404)
        {
          setemailcheck(false);
          seterrormessage("Email not found");
        }
      }
    )

  }
  return (
    <div className="login flex items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-8 items-center">
        <div className="flex">
          <img src={logo} alt="" className="w-[100px] " />
        </div>
        <h1 className="text-primarytext text-3xl ">Enter your email.</h1>
        <div className="">
          <input
            type="text"
            placeholder="Email"
            className="username rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black"
            onChange={(e)=>setemail(e.target.value)}
            required
          />
        </div>
        {emailcheck ? null : <span className="text-primarytext">{errormessage}</span>}
        <button
          className="bg-primarytext rounded-2xl w-[50%] p-4"
          onClick={handleClick}
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default Forgetpassword1;
