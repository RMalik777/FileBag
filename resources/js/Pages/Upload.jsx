//problems: abis upload popup yang muncul selalu yg "invalid credentials" meskipun udh pdf dan <=3mb.

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
        sizeValidaton = false;
        setUploadedFile(file);
        console.log('set false1');
        return;
      }

      if (file.type !== "application/pdf") {
        // alert("File type must be pdf!");
        sizeValidaton = false;
        setUploadedFile(file);
        console.log('set false2');
        return;
      }
      else if(file.type == "application/pdf"){
        sizeValidaton = true;
        setUploadedFile(file);
        console.log('set true');
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
        setStatus(sizeValidaton);
      }
    };

    const handlePopupClose = () => {
      setShowPopup(false);
      navigate("/"); //after popup is closed, return to home page
    };

    return (
      <div className="upload-container">
        <Navbar />
        <main className="upload-main">
          {/* <button onClick={() => { setButtonPopup(true); setStatus(sizeValidaton); }}>Open Popup</button> */}
          <h1>
            Input document title and category, then drag file to the provided
            area.
          </h1>
          <div className="upload-form">
            <p className="form-label">Title *</p>
            <input type="text" className="form-input" />
            <p className="form-label">Category *</p>
            <select className="form-select">
              <option value="it">IT</option>
              <option value="hr">HR</option>
              <option value="management">Management</option>
              <option value="l&t">L&T</option>
            </select>
            <p>* Required field</p>
            <div
              className="drag-drop-zone"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              >
              <img
                src="assets/drag&drop.svg"
                alt="Drag & Drop Cover Banner"
                className="drag-drop-image"
              />
              <p className="drag-drop-text">
                Maximum size 3mb, pdf format only
              </p>
              {uploadedFile && <p>Uploaded file: {uploadedFile.name}</p>}
            </div>
          </div>
        </main>

        <footer className="upload-footer">
          <button className="cancel-button">
            Cancel
          </button>
          {/* BENERIN CODENYA SIZE VALNYA GAMA MASUK KONTOL */}
          <button className="upload-button" onClick={() => { setButtonPopup(true); setStatus(sizeValidaton); }}>
            Upload
          </button>
        </footer>
        
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} status={status}/>

        {showPopup && (
          <div className="popup-container">
            {/* Add your popup content and styling here */}
            <img src="assets/green_checkmark.svg" alt="Success icon" />
            <h2>File Successfully Uploaded!</h2>
            <button onClick={handlePopupClose}>X</button>
          </div>
        )}
      </div>
    );
    
  }
  