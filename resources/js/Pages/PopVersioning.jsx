import React, { useState, useEffect } from "react";
import { Head, usePage, Link } from "@inertiajs/react";

export default function PopVersioning(props) {
  const result = props.result;
  const [versionHistoryData, setVersionHistoryData] = useState([
    // Replace with your actual version history data
    {
      version: "SOP_IT_5.0",
      uploadDate: "03 March 2024",
      uploadBy: "Calveen",
    },
    {
      version: "SOP_IT_4.0",
      uploadDate: "03 February 2024",
      uploadBy: "Hansy",
    },
    {
      version: "SOP_IT_3.0",
      uploadDate: "03 January 2024",
      uploadBy: "Jep",
    },
    {
      version: "SOP_IT_2.0",
      uploadDate: "03 December 2023",
      uploadBy: "Raplay",
    },
    {
      version: "SOP_IT_1.0",
      uploadDate: "03 November 2023",
      uploadBy: "Vinsun",
    },
    // ... add more data objects here
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust for 4 columns per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVersionHistory = versionHistoryData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(result);

  return (
    <>
      <Head title="Version History | Filebag" />
      <div className="w-full min-h-screen h-full bg-black bg-opacity-20 flex justify-center items-center">
        <div className="relative flex flex-col p-10 w-full h-3/4 max-w-screen-xl bg-white text-center rounded-lg">
          <Link href="/">
            <button className="absolute top-4 right-4 bg-transparent border-none">
              <span className="material-symbols-rounded text-4xl hover:material-fill hover:text-cimbred cursor-pointer duration-300 ease-out">close</span>
            </button>
          </Link>
          <h1 className="text-2xl lg:text-3xl font-bold pb-5">Version History</h1>
          <table>
            <thead className="bg-3">
              <tr className="text-white text-md *:text-xl font-medium">
                <th className="py-5">Version</th>
                <th className="py-5">Upload Date</th>
                <th className="py-5 max-md:hidden">Upload By</th>
                <th className="py-5">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              {result.map((item, index) => (
                <tr
                  key={index}
                  className="border-x-0 border-y-2 *:text-lg *:font-medium">
                  <td className="p-5">{item.version}</td>
                  <td className="p-5">{item.file_date}</td>
                  <td className="p-5 max-md:hidden">{item.user_id}</td>
                  <td className="p-5">
                    <a href={`/${item.file_path}`} download>
                      <span className="material-symbols-rounded text-4xl hover:material-fill hover:text-cimbred cursor-pointer duration-300 ease-out">
                        download_for_offline
                      </span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add pagination controls here (refer to Index.jsx for styling) */}
          {/* <div className="flex justify-center items-center absolute bottom-0 w-full px-4">
            {Math.ceil(versionHistoryData.length / itemsPerPage) > 1 && (
              <>
                {Array(Math.ceil(versionHistoryData.length / itemsPerPage))
                  .fill(null)
                  .map((_, pageNumber) => (
                    <button
                      key={pageNumber + 1}
                      className={`px-3 py-2 rounded-md text-sm font-medium mx-1 ${
                        currentPage === pageNumber + 1
                          ? "bg-cimbred text-white hover:bg-cimbred-hover"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => handlePageChange(pageNumber + 1)}>
                      {pageNumber + 1}
                    </button>
                  ))}
              </>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}
