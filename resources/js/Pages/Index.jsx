import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function Index() {

  //data buat tabel
  const data = [
    { file: 'IT2024', category: 'IT', dateUpdated: '02 February 2024', uploadedBy: 'John Doe'},
    { file: 'HR2024', category: 'HR', dateUpdated: '02 February 2024', uploadedBy: 'John Doe'},
    { file: 'Management2024', category: 'Management', dateUpdated: '02 February 2024', uploadedBy: 'John Doe'},
    { file: 'LnD2023', category: 'LnD', dateUpdated: '02 February 2023', uploadedBy: 'John Doe'},
    { file: 'IT2023', category: 'IT', dateUpdated: '02 February 2023', uploadedBy: 'John Doe'},
    { file: 'HR2023', category: 'HR', dateUpdated: '02 February 2023', uploadedBy: 'John Doe'},
    { file: 'Management2023', category: 'Management', dateUpdated: '02 February 2023', uploadedBy: 'John Doe'},
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); //per page mau nampilin brp kolom (disesuaiin)

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      <Head title="Dashboard | Filebag" />
      <Navbar />
      <div className="w-full bg-cover bg-fixed bg-[url(../../../public/assets/homecover.jpg)] h-auto">
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
              <a href="/upload">
                <button className="group flex flex-row justify-center text-2xl px-5 py-3 text-white font-semibold rounded-full border border-4 border-white hover:bg-white hover:text-black *:hover:text-black *:hover:material-fill">
                  <span className="material-symbols-rounded pr-4 text-white text-3xl">
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
            className="h-fit w-100">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L40,197.3C80,171,160,117,240,112C320,107,400,149,480,186.7C560,224,640,256,720,229.3C800,203,880,117,960,112C1040,107,1120,181,1200,224C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className="h-auto w-full px-8 flex flex-col">
        <div className="flex">
          <select
            id="category"
            name="category"
            defaultValue="category"
            className="bg-3 font-bold rounded- text-white w-36 h-10 text-center mb-6">
            <option className="hidden" selected>
              Category
            </option>
            <option value={1}>IT</option>
            <option value={2}>HR</option>
            <option value={3}>Management</option>
            <option value={4}>L&T</option>
          </select>
        </div>
        <div className="flex flex-row justify-between">
          <p>Choose the Following Category Below!</p>
          <form className="relative">
            <div className="w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                <span className="material-symbols-rounded text-gray-200">search</span>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-16 text-lg font-medium border border-gray-300 px-5 py-3 rounded-full bg-3 text-white placeholder-gray-200"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <table className="table-auto w-full h-full bg-cimbred border-cimbred border-none text-white text-2xl border-collapse border-spacing-y-10 mt-4">
          <thead className="rounded-lg">
            <tr className="border-cimbred border-x-0 border-y-2 rounded-lg">
              <th style={{ width: '20%' }} className="py-5">File</th>
              <th style={{ width: '20%' }} className="py-5">Category</th>
              <th style={{ width: '20%' }} className="py-5">Date Updated</th>
              <th style={{ width: '20%' }} className="py-5">Uploaded By</th>
              <th style={{ width: '20%' }} className="py-5">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {/* <tr className="border-cimbred border-x-0 border-y-2">
              <th className="">
                <a href="" className="text-blue-600 underline">
                  IT2024
                </a>
              </th>
              <th className="py-3">IT</th>
              <th className="py-3">02 February 2024</th>
              <th className="py-3">Jeff</th>
              <th className="py-3">
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  schedule
                </span>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  add_circle
                </span>
              </th>
            </tr>
            <tr className="border-cimbred border-x-0 border-y-2">
              <th className="py-3">
                <a href="" className="text-blue-600 underline">
                  HR2024
                </a>
              </th>
              <th className="py-3">HR</th>
              <th className="py-3">02 February 2024</th>
              <th className="py-3">Jeff</th>
              <th className="py-3">
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  schedule
                </span>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  add_circle
                </span>
              </th>
            </tr>
            <tr className="border-cimbred border-x-0 border-y-2">
              <th className="py-3">
                <a href="" className="text-blue-600 underline">
                  Management2024
                </a>
              </th>
              <th className="py-3">Management</th>
              <th className="py-3">02 February 2024</th>
              <th className="py-3">Jeff</th>
              <th className="py-3">
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  schedule
                </span>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  add_circle
                </span>
              </th>
            </tr>
            <tr className="border-cimbred border-x-0 border-y-2">
              <th className="py-3">
                <a href="" className="text-blue-600 underline">
                  LnD2024
                </a>
              </th>
              <th className="py-3">LnD</th>
              <th className="py-3">02 February 2024</th>
              <th className="py-3">Jeff</th>
              <th className="py-3">
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  schedule
                </span>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  add_circle
                </span>
              </th>
            </tr> */}
            {currentItems.map((item, index) =>(
              <tr key={index}>
                <td>{item.file}</td>
                <td>{item.category}</td>
                <td>{item.dateUpdated}</td>
                <td>{item.uploadedBy}</td>
                <td style={{ textAlign: 'center' }}>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  {/* Replace with clock icon code */}
                  <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                    schedule
                  </span>
                </span>
                <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                  {/* Replace with plus icon code */}
                  <span className="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred">
                    add_circle
                  </span>
                </span>
              </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        {Array.from({ length: totalPages }, (_, pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: pageNumber + 1 === currentPage ? 'darkred' : 'white',
              color: pageNumber + 1 === currentPage ? 'white' : 'black',
              borderRadius: '50%',
              margin: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {pageNumber + 1}
          </button>
        ))}
        </div>
      </div>
    </>
  );
}
