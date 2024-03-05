import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {useNavigate} from "react-router-dom";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/Navbar/Navbar";

export default function Upload() {
  // const navigate = useNavigate();

  // const handleCancelClick = () => {
  //   navigate("/");
  // };

  const [buttonPopup, setButtonPopup] = useState(false);
  //change sizeValidation to swtich popup state
  let sizeValidaton = false;
  const [status, setStatus] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);

  const [fileType, setFileType] = useState(null); // Track file type

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileType(file.type);

    if (file.size > 3000000) {
      // alert("File size exceeds 3 MB limit!");
      // sizeValidaton = false;
      setStatus(false);
      setUploadedFile(file);
      console.log("set false1");
      return;
    }

    else if (file.type !== "application/pdf") {
      // alert("File type must be pdf!");
      // sizeValidaton = false;
      setStatus(false);
      setUploadedFile(file);
      console.log("set false2");
      return;
    } else{
      // sizeValidaton = true;
      setStatus(true);
      setUploadedFile(file);
      console.log("set true");
      return;
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleUploadClick = () => {
    if (!document.querySelector(".form-input").value.trim()) {
      alert("Please input a title for the document!");
      return;
    }

    if (uploadedFile) {
      // setShowPopup(true); //if there is an uploaded file, show popup after upload is clicked
      setButtonPopup(true);
      // setStatus(sizeValidaton);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/"); //after popup is closed, return to home page
  };

  return (
    <>
    <Head title="Upload | Filebag" />
      <Navbar />
      <div className="flex flex-col w-full h-screen bg-white pt-12">
        <main className="flex flex-auto flex-col items-center">
          {/* <button onClick={() => { setButtonPopup(true); setStatus(sizeValidaton); }}>Open Popup</button> */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-center h-auto lg:h-full px-32">
            <div className="flex flex-col justify-between">
              <h1>
                Input document title and category, then drag file to the
                provided area.
              </h1>
              <label
                htmlFor="title"
                className="text-2xl text-black font-bold">
                Title <span className="text-red-600">*</span>
              </label>
              <input
                name="title"
                type="text"
                className="form-input p-2 border border-solid border-black rounded-md mb-8 font-medium"
              />
              <label
                htmlFor="category"
                className="text-2xl text-black font-bold">
                Category <span className="text-red-600">*</span>
              </label>
              <select
                name="category"
                className="form-select p-2 border border-solid border-black rounded-md mb-4 font-medium">
                <option className="font-medium" value="it">IT</option>
                <option className="font-medium" value="hr">HR</option>
                <option className="font-medium" value="management">Management</option>
                <option className="font-medium" value="l&t">L&T</option>
              </select>
            </div>
            <input type="file" name="uploadfile" id="uploadfile" hidden />
            <label
            for="uploadfile"
              className="flex flex-col items-center justify-center mb-8 h-auto aspect-video max-w-4xl min-w-60 w-1/2 border border-4 border-zinc-400 rounded-lg"
              onDragOver={handleDragOver}
              onDrop={handleDrop}>
              <span class="material-symbols-rounded text-9xl text-zinc-300">
                cloud_upload
              </span>
              <p className="text-lg font-medium text-center">Click to upload or drag and drop<br />Maximum size 3mb, PDF format only</p>
              {uploadedFile && <p>Uploaded file: {uploadedFile.name} | Upload time: {new Date().toLocaleString()}</p>}
            </label>
          </div>
        </main>

        <footer className="w-full flex justify-between items-center mb-12 px-32 p-2 bg-white">
          <p className="text-red-600 font-medium text-lg">* Required field</p>
          <div className="flex flex-row gap-14 items-center">
            <button className="bg-white border border-4 border-white font-bold text-2xl px-5 py-2 rounded-full duration-200 hover:bg-black hover:text-white hover:border-black">Cancel</button>
            <button
              className="bg-white border border-4 border-cimbred text-cimbred font-bold text-2xl px-5 py-2 rounded-full duration-200 hover:bg-cimbred hover:text-white"
              onClick={handleUploadClick}>
              Upload
            </button>
          </div>
        </footer>

        <Popup
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          status={status}
        />

        {showPopup && (
          <div className="popup-container">
            {/* Add your popup content and styling here */}
            <img src="assets/green_checkmark.svg" alt="Success icon" />
            <h2>File Successfully Uploaded!</h2>
            <button onClick={handlePopupClose}>X</button>
          </div>
        )}
      </div>
    </>
  );
}
