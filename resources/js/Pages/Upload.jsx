import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useNavigate from "react-router-dom";

export default function Upload() {
    const navigate = useNavigate();

    const handleCancelClick = () => {
      navigate("/");
    };

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
        alert("File size exceeds 3 MB limit!");
        return;
      }

      if (file.type !== "application/pdf") {
        alert("File type must be pdf!");
        return;
      }

      setUploadedFile(file);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handleUploadClick = () => {
      if (!document.querySelector(".form-input").value.trim()) {
        alert("Please input a title for the document!");
        return;
      }

      if (uploadedFile) {
        setShowPopup(true); //if there is an uploaded file, show popup after upload is clicked
      }
    };

    const handlePopupClose = () => {
      setShowPopup(false);
      navigate("/"); //after popup is closed, return to home page
    };

    return (
      <div className="upload-container">
        <header className="upload-header">
          <h4 className="upload-title">Upload Page</h4>
          <img
            src="assets/filebagxcimb.svg"
            alt="FileBag x CIMB Niaga"
            className="upload-logo"
          />
          <div className="user-profile">
            <img
              src="assets/user_photo.svg"
              alt="Profile"
              className="profile-pic"
            />
            <p>Hello, Calvin!</p>
            <p>Project Manager</p>
          </div>
        </header>

        <main className="upload-main">
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
              onDrop={handleDrop}>
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
          <button className="cancel-button" onClick={handleCancelClick}>
            Cancel
          </button>
          <button className="upload-button" onClick={handleUploadClick}>
            Upload
          </button>
        </footer>

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
