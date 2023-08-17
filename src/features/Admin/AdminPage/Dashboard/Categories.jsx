import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import TableGory from "../../../../Components/layout/components/TableGory";
import SideBarAdmin from "./SideBarAdmin";
import { CategoriesData } from "../../../../Data/CategoriesData";
import CategoryModal from "../../../../Components/layout/components/Modals/CategoryModal";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen]);

  return (
    <LayoutAdmin>
      <SideBarAdmin>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2>Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>

        <TableGory
          data={CategoriesData}
          users={false}
          OnEditFunction={OnEditFunction}
        />
      </div>
    </SideBarAdmin>
    </LayoutAdmin>

  );
}

export default Categories;
