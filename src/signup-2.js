import { React, useRef } from "react";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Gethost from "./host";
import defaultUser from "./img/defaultUser.png";

// import Signup2 from "./signup-2";
function Signup2({ onNext }) {
  const fileInputRef = useRef(null);
  const [file, setfile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  //   const handleFileInputChange = async (event) => {
  //     //   setSelectedFile(event.target.files[0]);
  //       setfile(event.target.files[0]);
  //       console.log(file);
  //       if (file) {
  //           window.alert("inside file");
  //           const reader = new FileReader();
  //           reader.onload = (e) => {
  //               const result = e.target.result;
  //               setSelectedFile(result);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  const handleFileInputChange = async (e) => {
    setSelectedFile(e.target.files[0]);
    setfile(e.target.files[0]);
  };

  const handleNext = async () => {
    const formData = new FormData();
    formData.append("file", file);

    onNext(2);
    axios
      .post(
        `http://127.0.0.1:8000/addfile/${localStorage.getItem(
          "temitopeusername"
        )}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((e) => {
        console.log(e.data.status_code);

      });
    // localStorage.setItem('temitopefilloc',selectedFile);
  };
  return (
    <main className="login flex items-center justify-center h-screen gap-5 w-screen bg-primary flex-col text-center">
      <h1 className="text-primarytext text-3xl">Choose a profile picture</h1>
      <div className="img items-center  justify-center flex flex-col gap-5">
        <img
          src={selectedFile ? URL.createObjectURL(selectedFile) : defaultUser}
          alt="Profile"
          className="w-[200px] h-[200px] relative rounded-[50%]"
        />
        <input
          type="file"
          name=""
          ref={fileInputRef}
          accept="image/"
          onChange={handleFileInputChange}
          className="hidden"
        />
        <button
          onClick={(e) => fileInputRef.current.click(e)}
          className="bg-primarytext w-[70%] px-4 py-2 rounded-2xl"
        >
          {selectedFile ? "Change File" : "Choose file"}
        </button>
        <button
          className="bg-primarytext px-4 py-2 w-[70%] rounded-2xl"
          onClick={handleNext}
        >
          {selectedFile ? "Done" : "Skip"}
        </button>
      </div>
    </main>
  );
}

export default Signup2;
