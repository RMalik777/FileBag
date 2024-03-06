import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/Navbar/Navbar";
import { Inertia } from "@inertiajs/inertia";

export default function Upload() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [status, setStatus] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [version, setVersion] = useState(1); // Initialize version number to 1

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setFileType(file.type);
    if (file.size > 3000000 || file.type !== "application/pdf") {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    setFileType(file.type);
    if (file.size > 3000000 || file.type !== "application/pdf") {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  const handleUploadClick = () => {
    const title = document.querySelector(".form-input").value.trim();
    const category = document.querySelector("[name=category]").value;

    if (!title) {
      alert("Please input a title for the document!");
      return;
    }

    if (uploadedFile && status) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", uploadedFile);
      formData.append("version", version); // Send version number along with other data

      // Make a POST request to upload the file
      Inertia.post("/upload", formData, {
        onSuccess: () => {
          // Increment the version number for the next upload
          setVersion(version + 1);
          setButtonPopup(true);
        },
        onError: () => {
          alert("File upload failed.");
        },
      });
    }
  };

  return (
    <>
      <Head title="Upload | Filebag" />
      <Navbar />
      <div className="flex flex-col w-full h-screen bg-white pt-12">
        <main className="flex flex-auto flex-col items-center">
          <div className="flex flex-col lg:flex-row w-full justify-between items-center h-auto lg:h-full px-32">
            <div className="flex flex-col justify-between">
              <h1>
                Input document title and category, then drag file to the
                provided area.
              </h1>
              <label htmlFor="title" className="text-2xl text-black font-bold">
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
                <option className="font-medium" value="it">
                  IT
                </option>
                <option className="font-medium" value="hr">
                  HR
                </option>
                <option className="font-medium" value="management">
                  Management
                </option>
                <option className="font-medium" value="l&t">
                  L&T
                </option>
              </select>
            </div>
            <input
              type="file"
              name="uploadfile"
              id="uploadfile"
              onChange={handleInput}
              hidden
            />
            <div
              className="flex flex-col items-center justify-center mb-8 h-auto aspect-video max-w-4xl min-w-60 w-1/2 border border-4 border-zinc-400 rounded-lg"
              onDragOver={handleDragOver}
              onDrop={handleDrop}>
              <span className="material-symbols-rounded text-9xl text-zinc-300">
                {uploadedFile ? "draft" : "cloud_upload"}
              </span>
              <p className="text-lg font-medium text-center">
                Drop files or{" "}
                <label
                  htmlFor="uploadfile"
                  className="text-blue-400 cursor-pointer underline hover:text-blue-500">
                  browse
                </label>
                <br />
                <span className="font-normal">
                  {uploadedFile
                    ? uploadedFile && (
                        <p className="">
                          Uploaded file:{" "}
                          <span className="font-medium">
                            {uploadedFile.name}
                          </span>
                          <br /> Upload time:{" "}
                          <span className="font-medium">
                            {new Date().toLocaleString()}
                          </span>
                          <br />
                          size:{parseInt(uploadedFile.size / 1000)}KB
                        </p>
                      )
                    : "Maximum size 3MB, PDF format only"}
                </span>
              </p>
            </div>
          </div>
        </main>

        <footer className="w-full flex justify-between items-center mb-12 px-32 p-2 bg-white">
          <p className="text-red-600 font-medium text-lg">* Required field</p>
          <div className="flex flex-row gap-14 items-center">
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
          version={version} // Pass version number to Popup component
        />
      </div>
    </>
  );
}
