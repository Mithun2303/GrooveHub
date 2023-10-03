import React from "react";
import logo from "./img/logo.png";
import { useState } from "react";
import Gethost from "./host";
import axios from "axios";
import { setMail } from "./auth";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Forgetpassword1( {onNext}) {
  const navigate = useNavigate();
  const host = Gethost();
  const [email, setemail] = useState("");
  const [emailcheck, setemailcheck] = useState(false);
  const [otpcheck, setotpcheck] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const [submitmsg, setsubmitmsg] = useState("Next");
  const [otp, setotp] = useState("");
  const [toggleValue, setValue] = useState(false);
  const toggleSetValue = () => {
    setValue(!toggleValue);
  };
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
  function handleClick(e) {
    e.preventDefault();
    const params = {
      mail: email,
    };
    if (submitmsg === "Next") {
      axios
        .get(host + "api/checkmail", { params: params })
        .then((res) => {
          if (res.data.status_code == 404) {
            setemailcheck(false);
            seterrormessage("Email not found.");
          } else {
            setotpcheck(false);
            setemailcheck(true);
            setsubmitmsg("Submit");
            axios.get(host + "api/sendotp", { params: params }).then((res) => {
              if (res.data.status_code == 100) {
                setotpcheck(res.data.detail);
              }
            });
          }
        })
        .catch((err) => window.alert(err));
    } else if (submitmsg == "Submit") {
      if (otp == otpcheck) {
        setMail(email);
        onNext();
      }
    }
  }
  return (
    <div className="login flex items-center justify-center h-screen w-screen bg-primary">
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
            onChange={(e) => {
              setemail(e.target.value);
              setsubmitmsg("Next");
            }}
            required
          />
        </div>
        {emailcheck && (
          <div>
            <input
              type="text"
              placeholder="OTP"
              className="username rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black"
              onChange={(e) => setotp(e.target.value)}
            />
            <span
              className="hover:cursor-pointer relative -top-12"
              onClick={toggleSetValue}
            >
              <RenderEye />
            </span>
          </div>
        )}
        {emailcheck ? null : (
          <span className="text-primarytext">{errormessage}</span>
        )}
        <button
          className="bg-primarytext rounded-2xl w-[50%] p-4"
          onClick={(e) => handleClick(e)}
        >
          {submitmsg}
        </button>
      </form>
    </div>
  );
}

export default Forgetpassword1;
