import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from './img/logo.png'


function Forgetpassword2()
{
    return(
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
        required
      />
    </div>
    <button
      className="bg-primarytext rounded-2xl w-[50%] p-4"
    >

    </button>
  </form>
</div>
    );
};

export default Forgetpassword2;