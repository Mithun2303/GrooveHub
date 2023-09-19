import React from "react";
import { useState } from "react";
import logo from "./img/logo.png";
import axios from "axios";
import Gethost from "./host";
import { Link } from "react-router-dom";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [toggleValue, setValue] = useState(false);
  const toggleSetValue = () => {
    setValue(!toggleValue);
  };

  const host = Gethost();
  const RenderEye = () => {
    if (toggleValue) {
      return (
        <svg
          className="relative left-[240px] top-3.5"
          width="20px"
          height="20px"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M12 14a2 2 0 100-4 2 2 0 000 4z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      );
    } else
      return (
        <svg
          className="relative left-[240px] top-3.5"
          width="20px"
          height="20px"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M3 3l18 18M10.5 10.677a2 2 0 002.823 2.823"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6 1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 01-1.078 1.5"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      );
  };
  const usernamepattern = /^[a-zA-Z0-9_-]{3,20}$/;
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneNumberPattern = /\d/;
  const handleClick = (e) => {
    e.preventDefault();
    if(usernamepattern.test(username)){
      let obj = {
        username:username,
        password:password
      };
      window.alert(host+'/login');
      axios.post(host+'/login',obj).then(
        (res) => {
          console.log(res.data);
        }
      )
    }
    else if (emailPattern.test(username))
    {
      let obj = {
        email:username,
        password:password
      }

    }
    else if (phoneNumberPattern.test(username))
    {
       let obj = {
        username:username,
        password:password
      }
    }

    
    
  };
  return (
    <div className="login flex items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-8 items-center">
        <div className="flex">
          <img src={logo} alt="" className="w-[100px] " />
        </div>
        <h1 className="text-primarytext text-3xl ">Welcome back!</h1>
        <div className="">
          <input
            type="text"
            placeholder="Username"
            onChange={(e)=>setusername(e.target.value)}
            className=" rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black"
          />
        </div>
        <div className="">
          <input
            type={toggleValue ? "text" : "password"}
            className="text-md  bg-gray1 rounded-2xl w-[274px] h-12 px-4 outline-none placeholder:text-lg  placeholder:text-black"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <span
            className="hover:cursor-pointer relative -top-12"
            onClick={toggleSetValue}
          >
            <RenderEye />
          </span>
        </div>
        <div className="hover:text-gray1 underline mx-1 text-primarytext ml-[40%] -top-10 relative">
          <Link to="/forgetpassword">Forget password?</Link>
        </div>
        <button
          className="bg-primarytext rounded-2xl w-[50%] p-4 -top-10 relative"
          onClick={(e)=>handleClick(e)}
        >
          Submit
        </button>
        <span className="text-gray1 -top-10 relative">
          Need an account?
          <Link
            to="/signup1"
            className="hover:text-gray1 underline mx-1 text-primarytext"
          >
            Sign up
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
