import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Head } from "@inertiajs/inertia-react";

export default function Index(props) {
  //data buat tabel
  const header = props.fileHeader;
  const detail = props.fileDetail;
  const category = props.category;
  const users = props.users;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); //per page nampilin 4 kolom data

  const totalPages = Math.ceil(header.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;;

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
              <h1 className="text-4xl lg:text-6xl text-white font-bold">
                Project SOP Files
              </h1>
              <h2 className="text-xl lg:text-2xl text-white">
                *Maximum 3MB File Size in PDF Format
              </h2>
            </div>
            <div>
              <a href="/upload" className="">
                <button className="group flex flex-row justify-center items-center text-xl lg:text-3xl px-5 lg:px-7 py-3 lg:py-5 text-white font-semibold rounded-full border border-4 border-white hover:bg-white hover:text-black *:hover:text-black *:hover:material-fill">
                  <span className="material-symbols-rounded pr-4 text-white text-3xl lg:text-5xl">
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
        <p>Choose the Following Category Below!</p>
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex">
            <select
              id="category"
              name="category"
              defaultValue="category"
              className="bg-3 font-bold rounded- text-white w-36 h-10 text-center mb-2">
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
          <form className="relative">
            <div className="w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-16 text-lg font-medium border border-gray-300 px-5 py-3 rounded-full bg-3 text-white placeholder-gray-200"
                placeholder="Search"
                required
              />
              <span className="material-symbols-rounded absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-gray-200">
                search
              </span>
            </div>
          </form>
        </div>
        <table className="table-auto w-full h-full bg-cimbred border-cimbred border-none text-white font-medium text-xl border-collapse border-spacing-y-10 mt-4">
          <thead className="rounded-lg font-bold">
            <tr className="border-cimbred border-x-0 border-y-2 rounded-lg">
              <th style={{ width: '20%' }} className="py-5">File</th>
              <th style={{ width: '20%' }} className="py-5">Category</th>
              <th style={{ width: '20%' }} className="py-5 max-md:hidden">Date Updated</th>
              <th style={{ width: '20%' }} className="py-5 max-md:hidden">Uploaded By</th>
              <th style={{ width: '20%' }} className="py-5">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black">
            {header.map((item, index) =>(
              <tr key={item.id} className="border-cimbred border-x-0 border-y-2">
                <td className="text-center"><span className="text-blue-500 hover:text-blue-600 underline cursor-pointer duration-300 ease-out">{detail[item.id]?.file_name}</span></td>
                <td className="text-center">{item.category_id}</td>
                <td className="text-center">{item.file_date}</td>
                <td className="text-center">{item.employee_id}</td>
                <td className="text-center">
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
