// import React from "react";
// import { FaRegListAlt, FaUser } from "react-icons/fa";
// import { HiViewGridAdd } from "react-icons/hi";
// import Table from "../../../../Components/layout/components/TableFavorites";
// import { Movies } from "../../../../Data/MovieData";
// import SideBarAdmin from "./SideBarAdmin";

// function Dashboard() {
//   const DashboardData = [
//     {
//       bg: "bg-orange-600",
//       icon: <HiViewGridAdd />,
//       title: "Total Movies",
//       total: 90,
//     },
//     {
//       bg: "bg-blue-700",
//       icon: <HiViewGridAdd />,
//       title: "Total Categories",
//       total: 8,
//     },
//     {
//       bg: "bg-green-600",
//       icon: <HiViewGridAdd />,
//       title: "Total Users",
//       total: 134,
//     },
//   ];
//   const sideBar = DashboardData.map((data, index) => (
//     <div
//       key={index}
//       className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
//     >
//       <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
//         {data.icon}
//       </div>
//       <div className="col-span-3">
//         <h2>{data.title}</h2>
//         <p className=" mt-2 font-bold">{data.total}</p>
//       </div>
//     </div>
//   ));
//   return (
//     <SideBarAdmin>
//       <h2 className="font-bold">Dashboard</h2>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//         {sideBar}
//       </div>
//       <h3 className="text-md font-medium my-6 text-border">Recent Movies</h3>
//       <Table data={Movies.slice(0, 5)} admin={true} />
//     </SideBarAdmin>
//   );
// }

// export default Dashboard;




// import React from "react";
// import { FaRegListAlt, FaUser } from "react-icons/fa";
// import { HiViewGridAdd } from "react-icons/hi";
// import Table from "../../../../Components/layout/components/Table";
// import { Movies } from "../../../../Data/MovieData";
// import SideBarAdmin from "./SideBarAdmin";

// function Dashboard() {
//   const DashboardData = [
//     {
//       bg: "bg-orange-600",
//       icon: <HiViewGridAdd />,
//       title: "Total Movies",
//       total: 90,
//     },
//     {
//       bg: "bg-blue-700",
//       icon: <HiViewGridAdd />,
//       title: "Total Categories",
//       total: 8,
//     },
//     {
//       bg: "bg-green-600",
//       icon: <HiViewGridAdd />,
//       title: "Total Users",
//       total: 134,
//     },
//   ];
//   const sideBar = DashboardData.map((data, index) => (
//     <div
//       key={index}
//       className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
//     >
//       <div className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}>
//         {data.icon}
//       </div>
//       <div className="col-span-3">
//         <h2>{data.title}</h2>
//         <p className=" mt-2 font-bold">{data.total}</p>
//       </div>
//     </div>
//   ));
//   return (
//     <>
//       <SideBarAdmin>
//         <h2 className="font-bold">Dashboard</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//           {sideBar}
//         </div>
//         <h3 className="text-md font-medium my-6 text-border">Recent Movies</h3>
//         <Table data={Movies.slice(0, 5)} admin={true} />
//       </SideBarAdmin>
//     </>
//   );
// }

// export default Dashboard;




import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import SideBarAdmin from "./SideBarAdmin";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../../Components/layout/components/Table";
import { Movies } from "../../../../Data/MovieData";

function Dashboard() {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 8,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total Users",
      total: 134,
    },
  ];
  return (
    <SideBarAdmin>
      <h2 className="text-white">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, index) => (
          <div
            key={index}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2 className="text-white">{data.title}</h2>
              <p className=" mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium my-6 text-border">Recent Movies</h3>
      <Table data={Movies.slice(0, 5)} admin={true} />
    </SideBarAdmin>
  );
}

export default Dashboard;