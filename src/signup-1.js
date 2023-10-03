import React from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import Gethost from "./host";

// import Signup2 from "./signup-2";
function Signup1({onNext})
{
  
  const host = Gethost();
  const navigate = useNavigate();
  let [username,setusername ]= useState("");
  let [email,setemail ]= useState("");
  let [phno,setphno ]= useState("");
  let [errormessage,seterrrormessage] = useState("");
  let [userfound,setuserfound] = useState(false);

  function handleClick(e)
  {
    if(username,email,phno){
    e.preventDefault();
    const params= {
      name:username
    };
axios.get(host+"/checkuname",{params:params}).then(
      (res) => {
        console.log(res.data.status_code);
        if(res.data.status_code===302)
        {
          setuserfound(false);
          seterrrormessage("Username already exists.");
        }
        else{
          setuserfound(true);
          seterrrormessage("");
          localStorage.setItem('temitopeusername',username);
          localStorage.setItem('temitopeemail',email);
          localStorage.setItem('temitopephno',phno);
          // navigate(`/signup2/${username}/${email}/${phno}`)
          onNext(1);
        }
      }
    )
    }
  }
  
return (
    (<div className="login flex items-center justify-center h-screen w-screen bg-primary">
        <form action="" className="flex flex-col gap-8 items-center">
            <div className="flex">
            <img src={logo} alt="" className="w-[100px] " />
            </div>
        <h1 className="text-primarytext text-3xl ">
            Create an account.
        </h1>
        <div className="">
        <input type="text" 
          placeholder="Username" 
          className="username rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black"
          required
          onChange={(e)=> setusername(e.target.value)}/>
        </div>
        <div className="">
            <input type="email" 
            placeholder="Email" 
            className="email rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black" 
            required
            onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="">
            <input type="text" 
            placeholder="Phone number" 
            className="phno rounded-2xl bg-gray1 h-12 px-4 placeholder:text-lg w-[274px] text-black placeholder:text-black" 
            required 
            onChange={(e)=>setphno(e.target.value)}/>
        </div>
        <button className="bg-primarytext rounded-2xl w-[50%] p-4" onClick={(e)=>handleClick(e)} >Next</button>

        {userfound ? true : <span className="text-primarytext">{errormessage}</span>}
        <span className="text-gray1">
            Already have an account?
        <Link to='/'className="hover:text-gray1 underline mx-1 text-primarytext">Sign in</Link>
        </span>
        </form>

    </div>)
);
}

export default Signup1;