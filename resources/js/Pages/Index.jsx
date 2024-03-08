import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PopVersioning from "./PopVersioning";
import { Head, usePage, Link } from "@inertiajs/react";

export default function Index(props) {
  //data buat tabel
  let header = props.fileHeader;
  const detail = props.fileDetail;
  const category = props.category;
  const users = props.users;
  const data = props.data;
  const result = props.show;
  const { url, component } = usePage();

  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  if (window.location.href.includes("?searchword=")) {
    header = result;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); //per page mau nampilin brp kolom (disesuaiin)

  const totalPages = Math.ceil(header.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const slicedData = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [isPopOpen, setIsPopOpen] = useState(false); // State to manage popup visibility

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopOpen(!isPopOpen);
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
                SOP Files Management
              </h1>
            </div>
            <div>
              <a href="/upload" className="">
                <button className="group flex flex-row justify-center items-center text-xl lg:text-2xl px-5 py-3 text-white font-semibold rounded-full border border-4 border-white hover:bg-white hover:text-black *:hover:text-black *:hover:material-fill duration-200 ease-out *:duration-200 *:ease-out">
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
        <div className="flex w-full flex-col md:flex-row justify-between md:items-center mb-2 max-md:gap-4">
          <div className="flex">
            <select
              id="category"
              name="category"
              defaultValue="category"
              onChange=""
              className="bg-cimbred font-bold rounded-md text-white text-left px-2 py-3">
              <option className="hidden" selected>
                Select Category
              </option>
              {category.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row gap-4">
            <form
              className="relative w-full"
              onSubmit={fetch(`/?searchword=${searchTerm}`)}>
              <div className="w-full">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full pl-16 pr-8 py-4 text-lg font-medium border border-gray-300 rounded-full bg-cimbred text-white placeholder-gray-100"
                  // name="searchword"
                  // value="{{ Request::get('searchword') }}"
                  name="searchword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search"
                  required
                />
                <span className="material-symbols-rounded absolute ml-2 inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-gray-100">
                  search
                </span>
              </div>
            </form>
            <Link href="/" className="">
              <button className="bg-transparent border-cimbred border-4 h-full px-8 py-4 rounded-full text-cimbred font-medium hover:bg-cimbred hover:text-white duration-300 ease-in-out">
                Clear
              </button>
            </Link>
          </div>
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
          {url.startsWith("/?searchword") ? (
            <tbody className="bg-white text-black">
              {slicedData.map((item, index) => (
                <tr
                key={item.id}
                className="border-cimbred border-x-0 border-y-2">
                <td className="py-3">
                  <span className="duration-200 ease-out">
                    {item.file_name}
                  </span>
                </td>
                <td className="py-3 ">{item.category_name}</td>
                <td className="py-3 text-center max-md:hidden">
                  {item.file_date}
                </td>
                <td className="py-3 text-center max-md:hidden">
                  {item.username}
                </td>
                <td className="flex flex-col sm:flex-row items-center justify-center text-center *:px-1 *:text-4xl">
                  <Link
                    href={`/${item.id}/version`}
                    trigger={true}
                    setTrigger={setIsPopOpen}
                    className="*:px-1 *:text-4xl *:mt-1">
                    <span
                      className="material-symbols-rounded hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out"
                      onClick={togglePopup}>
                      schedule
                    </span>
                  </Link>
                  {/* Replace with plus icon code */}
                  <Link
                    href={`/${item.id}/update`}
                    trigger={true}
                    setTrigger={setIsPopOpen}
                    className="*:px-1 *:text-4xl">
                    <span
                      className="material-symbols-rounded hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out"
                      onClick={togglePopup}>
                      add_circle
                    </span>
                  </Link>
                  <a href={item.file_path} download>
                    <span class="material-symbols-rounded text-4xl hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out">
                      download_for_offline
                    </span>
                  </a>
                </td>
              </tr>
              ))}
            </tbody>
          ) : (
            <tbody className="bg-white text-black">
              {slicedData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-cimbred border-x-0 border-y-2">
                  <td className="py-3">
                    <span className="duration-200 ease-out">
                      {item.file_name}
                    </span>
                  </td>
                  <td className="py-3 ">{item.category_name}</td>
                  <td className="py-3 text-center max-md:hidden">
                    {item.file_date}
                  </td>
                  <td className="py-3 text-center max-md:hidden">
                    {item.username}
                  </td>
                  <td className="flex flex-col sm:flex-row items-center justify-center text-center *:px-1 *:text-4xl">
                    <Link
                      href={`/${item.id}/version`}
                      trigger={true}
                      setTrigger={setIsPopOpen}
                      className="*:px-1 *:text-4xl *:mt-1">
                      <span
                        className="material-symbols-rounded hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out"
                        onClick={togglePopup}>
                        schedule
                      </span>
                    </Link>
                    {/* Replace with plus icon code */}
                    <Link
                      href={`/${item.id}/update`}
                      trigger={true}
                      setTrigger={setIsPopOpen}
                      className="*:px-1 *:text-4xl">
                      <span
                        className="material-symbols-rounded hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out"
                        onClick={togglePopup}>
                        add_circle
                      </span>
                    </Link>
                    <a href={item.file_path} download>
                      <span class="material-symbols-rounded text-4xl hover:material-fill hover:text-cimbred cursor-pointer duration-200 ease-out">
                        download_for_offline
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
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
