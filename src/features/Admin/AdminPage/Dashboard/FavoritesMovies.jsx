import React from "react";
import Tables from "../../../../Components/layout/components/Tables";
import SideBarAdmin from "./SideBarAdmin";
import { Movies } from "../../../../Data/MovieData";
import LayoutAdmin from "../../../../Components/LayoutAdmin";


function FavoritesMovies() {
  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <div className="flex flex-col gap-6">
          <div className="flex-btn gap-2">
            <h2 className="text-xl font-bold">Favorites Movies</h2>
            <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
              Delete All
            </button>
          </div>

          <Tables data={Movies} admin={false} />
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default FavoritesMovies;
