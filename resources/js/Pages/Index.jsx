import React from "react";
import Navbar from "../Components/Navbar/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-cover bg-fixed bg-[url(../../../public/assets/homecover.jpg)] h-screen">
        <div className="flex flex-col justify-between backdrop-brightness-50 h-full pt-60 ">
          <div className="px-12 flex flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-6xl text-white font-bold">
                Project SOP Files
              </h1>
              <h2 className="text-2xl text-white">
                *Maximum 3MB File Size in PDF Format
              </h2>
            </div>
            <div>
              <button className="group flex flex-row justify-center text-2xl px-5 py-3 text-white font-semibold rounded-full border border-4 border-white hover:bg-white hover:text-black *:hover:text-black">
                <span className="material-symbols-rounded pr-4 text-white text-3xl">
                  cloud_upload
                </span>
                Upload
              </button>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="h-fit w-100">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,186.7C560,224,640,256,720,229.3C800,203,880,117,960,112C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="h-screen">
        <h1></h1>
      </div>
    </>
  );
}
