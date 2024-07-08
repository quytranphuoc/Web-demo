import React from "react";
import SideBarAdmin from "./SideBarAdmin";
import Tables from "../../../../Components/layout/components/Table/Tables";
import { Movies } from "../../../../Data/MovieData";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
function MovieList() {
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-white">Movies List</h2>
          </div>
          <Tables data={Movies} admin={true} />
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default MovieList;
