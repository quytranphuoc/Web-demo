import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import Table from "../../../../Components/layout/components/Table";
import { Movies } from "../../../../Data/MovieData";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
function MovieList() {
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-white">Movies List</h2>
            <button className="bg-main transition hover:bg-subMain border border-subMain text-white py-3 px-6 rounded hover:text-red-800">
              Delete All
            </button>
          </div>
          <Table data={Movies} admin= {true}/>
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default MovieList;
