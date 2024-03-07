import React, { useState, useEffect } from "react";

function PopVersioning() {
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

  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center">
      <div className="relative flex flex-col p-10 w-full h-3/4 max-w-screen-xl bg-white text-center rounded-lg">
        <button className="absolute top-4 right-4 bg-transparent border-none">
          <img src="../../../assets/x.png" width="20px" alt="Close Button" />
        </button>
        <h1 className="text-2xl font-bold pb-5">Version History</h1>
        <table>
          <thead className="bg-3">
            <tr className="text-white text-md">
              <th className="py-5">Version</th>
              <th className="py-5">Upload Date</th>
              <th className="py-5">Upload By</th>
              <th className="py-5">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {currentVersionHistory.map((item, index) => (
              <tr key={index} className="border-x-0 border-y-2">
                <td className="p-5">{item.version}</td>
                <td className="p-5">{item.uploadDate}</td>
                <td className="p-5">{item.uploadBy}</td>
                <td className="p-5">
                  <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred cursor-pointer">
                    download_for_offline
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add pagination controls here (refer to Index.jsx for styling) */}
        <div className="flex justify-center items-center absolute bottom-3 w-full px-4">
            {Math.ceil(versionHistoryData.length / itemsPerPage) > 1 && (
                <>
                    {Array(Math.ceil(versionHistoryData.length / itemsPerPage))
                        .fill(null)
                        .map((_, pageNumber) => (
                            <button
                                key={pageNumber + 1}
                                className={`px-3 py-2 rounded-md text-sm font-medium mx-1 ${
                                    currentPage === pageNumber + 1 ? "bg-cimbred text-white hover:bg-cimbred-hover" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                                onClick={() => handlePageChange(pageNumber + 1)}
                            >
                                {pageNumber + 1}
                            </button>
                    ))}
                </>
            )}
        </div>
      </div>
    </div>
  );
}

export default PopVersioning;
