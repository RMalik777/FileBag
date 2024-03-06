import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Head, usePage } from "@inertiajs/react";

export default function Index(props) {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); //per page mau nampilin brp kolom (disesuaiin)
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  //data buat tabel
  let header = props.fileHeader;
  let detail = props.fileDetail;
  let category = props.category;
  let users = props.users;
  let result = props.show;
  if(window.location.href.includes("?searchword=")){
    header = result;
  }

  const totalPages = Math.ceil(header.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head title="Dashboard | Filebag" />
      <Navbar />
      <div className="w-full bg-cover bg-fixed bg-[url(../../../public/assets/homecover.jpg)] h-auto">
        <div className="flex flex-col justify-between backdrop-brightness-50 h-full pt-60 ">
          <div className="px-12 flex flex-col gap-8 md:flex-row md:gap-0 justify-between">
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl text-white pb-3 font-bold">
                Project SOP Files
              </h1>
              <h2 className="text-xl lg:text-xl text-white">
                *Maximum 3MB File Size in PDF Format
              </h2>
            </div>
            <div>
              <a href="/upload" className="">
                <button className="group flex flex-row justify-center items-center text-xl lg:text-2xl px-5 py-3 text-white font-semibold rounded-full border border-4 border-white hover:bg-white hover:text-black *:hover:text-black *:hover:material-fill">
                  <span className="material-symbols-rounded pr-4 text-white text-2xl">
                    cloud_upload
                  </span>
                  Upload
                </button>
              </a>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="h-fit w-100 -mb-1">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,186.7C560,224,640,256,720,229.3C800,203,880,117,960,112C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
              className=""></path>
          </svg>
        </div>
      </div>
      <div className="h-auto w-full px-8 flex flex-col">
        <p className="text-xl font-bold text-cimbred">
          Choose the Following Category Below!
        </p>
        <div className="flex w-full flex-col md:flex-row justify-between md:items-center mb-2">
          <div className="flex">
            <select
              id="category"
              name="category"
              defaultValue="category"
              className="bg-cimbred font-bold rounded-md text-white text-left px-2 py-3">
              <option className="hidden" selected>
                Category
              </option>
              <option className="font-medium" value={1}>
                IT
              </option>
              <option className="font-medium" value={2}>
                HR
              </option>
              <option className="font-medium" value={3}>
                Management
              </option>
              <option className="font-medium" value={4}>
                L&T
              </option>
            </select>
          </div>
          <form className="relative w-1/3" onSubmit={fetch(`/?searchword=${searchTerm}`)}>
            <div className="w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full pl-16 pr-8 py-4 text-lg font-medium border border-gray-300 rounded-full bg-cimbred text-white placeholder-gray-100"
                placeholder="Search"
                name="searchword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
              <span className="material-symbols-rounded absolute ml-2 inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-gray-100">
                search
              </span>
            </div>
          </form>
        </div>
        <table className="table-auto w-full h-full bg-cimbred border-cimbred border-none text-white font-medium text-xl border-collapse border-spacing-y-10 mt-4">
          <thead className="rounded-full font-bold">
            <tr className="border-cimbred border-x-0 border-y-2">
              <th style={{ width: "20%" }} className="py-5">
                File
              </th>
              <th style={{ width: "20%" }} className="py-5">
                Category
              </th>
              <th style={{ width: "20%" }} className="py-5 max-md:hidden">
                Date Updated
              </th>
              <th style={{ width: "20%" }} className="py-5 max-md:hidden">
                Uploaded By
              </th>
              <th style={{ width: "20%" }} className="py-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {category.map((item, index) => (
              <tr
                key={item.id}
                className="border-cimbred border-x-0 border-y-2">
                <td className="py-3">
                  <span className="duration-300 ease-out">
                    {detail[item.id - 1]?.file_name}
                  </span>
                </td>
                <td className="py-3 ">
                  {category[item.id - 1]?.category_name}
                </td>
                <td className="py-3 text-center">{item.file_date}</td>
                <td className="py-3 text-center">{users[item.id-1]?.username}</td>
                <td className="text-center *:px-1 *:text-4xl">
                  <span className="material-symbols-rounded hover:material-fill hover:text-cimbred cursor-pointer">
                    schedule
                  </span>
                  {/* Replace with plus icon code */}
                  <span className="material-symbols-rounded  hover:material-fill hover:text-cimbred cursor-pointer">
                    add_circle
                  </span>
                  <a href={detail[item.id-1].file_path} download>
                    <span class="material-symbols-rounded text-4xl hover:material-fill hover:text-cimbred cursor-pointer">
                      download_for_offline
                    </span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}>
          {Array.from({ length: totalPages }, (_, pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              style={{
                width: "30px",
                height: "30px",
                backgroundColor:
                pageNumber + 1 === currentPage ? "darkred" : "white",
                color: pageNumber + 1 === currentPage ? "white" : "black",
                borderRadius: "50%",
                margin: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
