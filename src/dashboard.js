import React from "react";
import logo from "./img/logo.png";
import name from "./img/name.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Gethost from "./host";
import defaultuser from "./img/defaultUser.png";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const host = Gethost();
  const [profile, setprofile] = useState(defaultuser);
  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://127.0.0.1:8000/api/songs")
      .then((response) => {
        // response.json();
        // console.log(response.data);
        setSongs(response.data);
        console.log(songs);
      })
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);
  useEffect(() => {
    let param = { uid: localStorage.getItem("temitopeuid") };
    axios
      .get("http://127.0.0.1:8000/api/userprofile", { params: param,responseType:'blob' })
      .then((res) => {
        // console.log(new Blob([res.data.detail],{type:'image/png'}).toString());
        // const blo = new Blob([res.data.detail], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(res.data);
        setprofile(imageUrl)
      });
  }, []);

  // return (
  //   <main className="bg-gray h-screen w-screen flex ">
  //     <div className="navbar w-[20%] h-screen bg-primary  rounded-e-2xl relative">
  //       <div className="flex flex-row m-[5%]">
  //         <img src={logo} alt="" className=" w-[30%]" />
  //         <img src={name} alt="" className="w-[70%] mix-blend-lighter " />
  //       </div>
  //     </div>
  //     <div className="songs w-[50%] max-h-screen  flex flex-col relative">
  //       <ul className="flex flex-wrap gap-5 mx-[10%] my-[10vh] w-[50vw] text-center">
  //         {songs.map((song, index) => (
  //           <li
  //             className="songname bg-glassbg rounded-[20px]   shadow backdrop-blur-2xl py-8  px-4 w-1/4 truncate h-[10vh]"
  //             key={index}
  //           >
  //             {song.songName}
  //           </li>
  //         ))}
  //       </ul>
  //       <div class="w-[80%] h-[15vh] m-[10%] bg-glassbg rounded-[20px] shadow backdrop-blur-2xl absolute top-[70vh] "></div>
  //     </div>
  //     <div className="album w-[30%] h-screen flex flex-col-reverse left-[50px]">
  //       <div className="photo w-90% h-[60vh] relative -left-[10%] mx-[10%]  my-[15%] bg-glassbg rounded-[20px] shadow backdrop-blur-2xl">
  //         <div className="image w-[90%] h-[70%] bg-primarytext mx-[5%] my-[5%]"></div>
  //         <div className="songname text-center text-gray1  font-sans text-[50px]">
  //           Lover
  //         </div>
  //       </div>
  //       {profile && <img src={profile} alt="Image" className="w-[70px] h-[70px] rounded-[50%]"/>}
  //     </div>
  //   </main>
  // );
  return(
    <main className="bg-primary w-screen h-screen">
      <div className="navbar flex justify-left px-[3vw] items-center h-[15%] border-b-4 border-gray">
      <div className="profile w-[8.33%]">
      <img src={logo} alt="" className="w-[70px] h-[70px]"/>
      </div>
      <div className="search w-[83.34%]">

      </div>
      <img src={profile} alt="" className="w-[70px] h-[70px] justify-right rounded-[50%] " />
      </div>
    </main>
  )
}

export default Dashboard;
