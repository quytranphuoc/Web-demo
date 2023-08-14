import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import Table from "../../../../Components/layout/components/TableFavorites";
const Users = ({ Movies }) => {
  return (
    <SideBarAdmin>
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2>Movies List</h2>
          <button className="transition hover:bg-subMain border border-subMain rounded">Delete All</button>
        </div>
        <Table data={Movies} admin={true} />
      </div>
    </SideBarAdmin>
  );
};

export default Users;
