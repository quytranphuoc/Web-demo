// import React, { useState } from "react";
// import { AiTwotoneEdit } from "react-icons/ai";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// function Table({ data, admin }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editing, setEditing] = useState(null);
//   const columns = (movie)=> [
//     {
//       key: "1",
//       title: "Image",
//       dataIndex:(movie.img),
//     },
//     {
//       key: "2",
//       title: "Name",
//       dataIndex: (movie.name),
//     },
//     {
//       key: "3",
//       title: "Category",
//       dataIndex: (movie.category),
//     },
//     {
//       key: "4",
//       title: "Language",
//       dataIndex: (movie.language),
//     },
//     {
//       key: "5",
//       title: "Year",
//       dataIndex: (movie.year),
//     },
//     {
//       key: "6",
//       title: "Hours",
//       dataIndex: (movie.time),
//     },
//     {
//       key: "7",
//       title: "Actions",
//       render: (record) => {
//         return (
//           <>
//             <div className="flex p-5">
//               <AiTwotoneEdit
//                 size={20}
//                 onClick={() => {
//                   onEdit(record);
//                 }}
//               />
//               <MdOutlineDeleteOutline size={20} />
//             </div>
//           </>
//         );
//       },
//     },
//   ];

//   const onEdit = (record) => {
//     setIsEditing(true);
//     setEditing({ ...record });

//   };
//   const Rows = ({movie, i, admin}) => {
//     return ()
//   }
//   return (
//     <div>
//     <Table>
//       colu
//     </Table>
//       <tbody className="bg-main divide-y divide-gray-800">
//         {data.map((movie, i) => columns(movie, i, admin))};
//       </tbody>
//     </div>
//   );
// }

// export default Table;

import React from "react";
import { FaCloudDownloadAlt, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoEye } from "react-icons/go";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text =
  "text-white text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// rows
const Rows = (movie, i, admin) => {
  return (
    <tr key={i}>
      <td className={`${Text}`}>
        <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={`/images/movie/${movie.titleImage}`}
            alt={movie?.title}
          />
        </div>
      </td>
      <td className={`${Text} truncate`}>{movie.title}</td>
      <td className={`${Text}`}>{movie.category}</td>
      <td className={`${Text}`}>{movie.language}</td>
      <td className={`${Text}`}>{movie.year}</td>
      <td className={`${Text}`}>{movie.time}</td>
      <td className={`${Text} float-right flex-rows gap-2`}>
        {admin ? (
          <>
            <button className="border border-border bg-dry flex-rows gap-2 text-white rounded py-1 px-2">
              Edit <FaEdit className="text-green-500" />
            </button>
            <button className="border border-border bg-dry flex-rows gap-2 text-white rounded py-1 px-2">
              Delete
              <MdDelete />
            </button>
          </>
        ) : (
          <>
            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
              Download <FaCloudDownloadAlt className="text-green-500" />
            </button>
            <Link
              to={`/movie/${movie?.title}`}
              className="bg-subMain text-white rounded flex-colo w-6 h-6"
            >
              <GoEye />
            </Link>
          </>
        )}
      </td>
    </tr>
  );
};

// table
function Table({ data, admin }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            <th scope="col" className={`${Head}`}>
              Image
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Category
            </th>
            <th scope="col" className={`${Head}`}>
              Language
            </th>
            <th scope="col" className={`${Head}`}>
              Year
            </th>
            <th scope="col" className={`${Head}`}>
              Hours
            </th>
            <th scope="col" className={`${Head} text-center`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((movie, i) => Rows(movie, i, admin))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
