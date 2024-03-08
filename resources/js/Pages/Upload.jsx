import React, { useState, useEffect } from "react";
import { Head, usePage } from "@inertiajs/react";
import Popup from "../Components/Popup/Popup";
import Navbar from "../Components/Navbar/Navbar";

export default function Upload(props, { csrf_token }) {
  console.log(props);
  const categories = props.category;
  const [buttonPopup, setButtonPopup] = useState(false);
  let sizeValidaton = false;
  const [status, setStatus] = useState(false);

  const [uploadedFile, setUploadedFile] = useState(null);

  const [fileType, setFileType] = useState(null); // Track file type

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleInput = (event) => {
    const file = event.target.files[0];

    if (file.size > 3000000) {
      setStatus(false);
      setUploadedFile(file);
      console.log("set false1");
      return;
    } else if (file.type !== "application/pdf") {
      setStatus(false);
      setUploadedFile(file);
      console.log("set false2");
      return;
    } else {
      setStatus(true);
      setUploadedFile(file);
      console.log("set true");
      return;
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileType(file.type);

    if (file.size > 3000000) {
      setStatus(false);
      setUploadedFile(file);
      console.log("set false1");
      return;
    } else if (file.type !== "application/pdf") {
      setStatus(false);
      setUploadedFile(file);
      console.log("set false2");
      return;
    } else {
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
      setButtonPopup(true);
    }
  };
  return (
    <>
      <Head title="Upload | Filebag" />
      <Navbar />
      <form action="/upload" method="POST" encType="multipart/form-data">
        <div className="flex flex-col max-lg:pt-32 w-full h-screen bg-white pt-12">
          <main className="flex flex-auto flex-col items-center">
            <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row w-full justify-between items-center h-auto lg:h-full px-32">
              <input type="hidden" name="_token" value={props.csrf_token} />
              <div className="flex flex-col justify-between">
                <h1 className="text-xl mb-8">
                  Input document title and category, then drag file to the
                  provided area.
                </h1>
                <label
                  htmlFor="title"
                  className="text-2xl text-black font-bold pb-2">
                  Title <span className="text-red-600">*</span>
                </label>
                <input
                  name="title"
                  type="text"
                  className="form-input p-2 border border-solid border-black rounded-md font-medium"
                />
                <p className="mb-8 text-red-500 font-medium">
                  {props.errors.title ? props.errors.title : " "}
                </p>
                <label
                  htmlFor="category"
                  className="text-2xl text-black font-bold pb-2">
                  Category <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="category"
                  id=""
                  className="form-input p-2 border border-solid border-black rounded-md font-medium"
                />
                <p className="mb-8 text-red-500 font-medium">
                  {props.errors.category ? props.errors.category : " "}
                </p>

                {/* <select
                  name="category"
                  className="form-select p-2 border border-solid border-black rounded-md mb-4 font-medium">
                  <option value="" className="text-gray-300" hidden>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category_name}
                    </option>
                  ))}
                </select> */}
              </div>
              <input
                type="file"
                name="targetfile"
                id="targetfile"
                onChange={handleInput}
                hidden
              />

              <label
                htmlFor="targetfile"
                className="flex flex-col items-center justify-center mb-8 h-auto aspect-video max-w-4xl min-w-60 w-1/2 border border-4 border-zinc-400 rounded-lg"
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <span className="material-symbols-rounded text-9xl text-zinc-300">
                  {uploadedFile ? "draft" : "cloud_upload"}
                </span>
                <p className="text-lg font-medium text-center">
                  Drop files or{" "}
                  <span className="text-blue-400 cursor-pointer underline hover:text-blue-500 duration-200 ease-out">
                    browse
                  </span>
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
                  <p className="mb-8 text-red-500 font-medium">
                {props.errors.targetfile ? props.errors.targetfile : " "}
              </p>
                </p>
              </label>
              
            </div>
          </main>

          <footer className="w-full flex justify-between items-center mb-12 px-32 p-2 bg-white">
            <p className="text-red-600 font-medium text-lg">* Required field</p>
            <div className="flex flex-row gap-14 items-center">
              <button
                type="submit"
                className="bg-white border border-4 border-cimbred text-cimbred font-bold text-2xl px-5 py-2 rounded-full duration-200 hover:bg-cimbred hover:text-white">
                Upload
              </button>
            </div>
          </footer>

          <Popup
            trigger={
              usePage().props.flash.success
                ? true
                : usePage().props.flash.error
                ? true
                : buttonPopup
            }
            setTrigger={setButtonPopup}
            status={usePage().props.flash.success ? true : false}
          />
        </div>
      </form>
    </>
  );
}
