import React from "react";

function PopVersioning(){
    return(
    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center'>
        <div className='relative flex flex-col p-10 w-full h-3/4 max-w-screen-xl bg-white text-center rounded-lg'>
            <button className='absolute top-4 right-4 bg-transparent border-none'><img src='../../../assets/x.png' width={'20px'}></img></button>
                <h1 className="text-2xl font-bold pb-5">Version History</h1>
            <table>
                <thead className="bg-3">
                    <tr className="text-white text-md">
                    <th style={{ width: "25%" }} className="py-5">
                        Version
                    </th>
                    <th style={{ width: "25%" }} className="py-5">
                        Upload Date
                    </th>
                    <th style={{ width: "25%" }} className="py-5">
                        Upload By
                    </th>
                    <th style={{ width: "25%" }} className="py-5">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-x-0 border-y-2">
                        <td className="p-5">
                            SOP_IT_5.0
                        </td>
                        <td className="p-5">
                            03 March 2024
                        </td>
                        <td className="p-5">
                            Calvin
                        </td>
                        <td className="p-5">
                            <span class="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred cursor-pointer">
                                download_for_offline
                            </span>
                        </td>
                    </tr>
                    <tr className="border-x-0 border-y-2">
                        <td className="p-5">
                            SOP_IT_5.0
                        </td>
                        <td className="p-5">
                            03 March 2024
                        </td>
                        <td className="p-5">
                            Calvin
                        </td>
                        <td className="p-5">
                            <span class="material-symbols-rounded text-3xl hover:material-fill hover:text-cimbred cursor-pointer">
                                download_for_offline
                            </span>
                        </td>
                    </tr>
                </tbody>
                </table>
        </div>
    </div>

    )
}

export default PopVersioning;