import React from "react";
import { FaRegListAlt, FaUser } from "react-icons/fa";
import SideBarAdmin from "./SideBarAdmin";
import { HiViewGridAdd } from "react-icons/hi";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import { Movies } from "../../../../Data/MovieData";
import Tables from "../../../../Components/layout/components/Table/Tables";
import { Pagination, Space } from "antd";
function Dashboard() {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 100,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 100,
    },
    {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total Users",
      total: 100,
    },
  ];
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <h2 className="text-white font-bold">Dashboard</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {DashboardData.map((data, index) => (
            <div
              key={index}
              className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2 text-white"
            >
              <div
                className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
              >
                <data.icon />
              </div>
              <div className="col-span-3">
                <h2>{data.title}</h2>
                <p className=" mt-2 font-bold">{data.total}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="text-md font-medium my-6 text-white">Recent Movies</h3>
        <Tables dataSource={Movies}/>
        {/* <Space size={8}  className="flex justify-end "> <Pagination pageSize={5} total={50}/></Space> */}
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default Dashboard;
