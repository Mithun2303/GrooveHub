import { React } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import logo from "./img/logo.png";
import { useNavigate } from "react-router-dom";
import Gethost from "./host";


// import { Link } from "react-router-dom";
// import Login from "./login";

function Signup2() {
  let host = Gethost();
  let data = useParams();
  const navigate = useNavigate();
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

  let [password, setpassword] = useState('');
  let [repassword, setrepassword] = useState('');
  let [passwordmatch,setpasswordmatch] = useState(false);
  let [errormessage,seterrormessage] = useState('');

  function handleclick(e)
  {
    e.preventDefault();
    if(password!==repassword)
    {
      setpasswordmatch(false);
      seterrormessage("Passwords must match.");
    }
    else{
      if(password.length<8)
      {

        setpasswordmatch(false);
        seterrormessage("Password must have a minimum of 8 charecters.")
      }
      else{
        handleauth();
      }
    }
    
  }

  const handleauth = () => {
    let obj = {
      username:data.username,
      email:data.email,
      mobileNo:data.phno,
      password:password
    }

    axios.post(host+"/register",obj).then(
      (res)=>{
        if(res.data.status_code === 200)
        {
          navigate('/');
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
        <div className="">
          <input
            type={toggleValue ? "text" : "password"}
            className="text-md  bg-gray1 rounded-2xl w-[274px] h-12 px-4 outline-none placeholder:text-lg  placeholder:text-black"
            placeholder="Enter password"
            onChange={(e)=>{setpassword(e.target.value);setpasswordmatch(true) }}
            required
          ></input>
          <span
            className="hover:cursor-pointer relative -top-12"
            onClick={toggleSetValue}
          >
            <RenderEye />
          </span>
        </div>
        <div className="">
          <input
            type={toggleValue ? "text" : "password"}
            className="text-md  bg-gray1 rounded-2xl w-[274px] h-12 px-4 outline-none placeholder:text-lg  placeholder:text-black"
            placeholder="Re-enter password"
            onChange={(e)=>{setrepassword(e.target.value);setpasswordmatch(true)}}
            required
          ></input>
          <span
            className="hover:cursor-pointer relative -top-12"
            onClick={toggleSetValue}>
            <RenderEye />
          </span>
        </div>
        <button
          className="submit bg-primarytext rounded-2xl w-[50%] p-4"
          onClick={handleclick}
        >
          I'm in!
        </button>
      {passwordmatch? null: <span className="text-primarytext">{errormessage}</span>}
      </form>
    </div>
  );
}

export default Signup2;
