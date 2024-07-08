import React, { useEffect, useState } from "react";
import Uploder from "../../../../Components/layout/components/Uploder";
import {
  Input,
  Message,
  Select,
} from "../../../../Components/layout/components/UsedInput";
import SideBarAdmin from "./SideBarAdmin";
import { CategoriesData } from "../../../../Data/CategoriesData";
import { UsersData } from "../../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../../Components/layout/components/Modals/CastsModal";
import LayoutAdmin from "../../../../Components/LayoutAdmin";
import Upload_Cast from "../../../../Components/layout/components/Upload_Cast";

function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <LayoutAdmin>
      <SideBarAdmin>
        <CastsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          cast={cast}
        />
        <div className="flex flex-col gap-6">
          <h2 className="textfont-bold">Create Movie</h2>
          <div className="w-full grid md:grid-cols-2 gap-6 text-white">
            <Input
              className="text-white"
              label="Movie Title"
              placeholder="Game of Thrones"
              type="text"
              bg={true}
            />
            <Input label="Hours" placeholder="2hr" type="text" bg={true} />
          </div>

          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label="Language Used"
              placeholder="English"
              type="text"
              bg={true}
            />
            <Input
              label="Year of Release"
              placeholder="2022"
              type="number"
              bg={true}
            />
          </div>

          {/* IMAGES */}
          <div className="w-full grid md:grid-cols-2 gap-6">
            {/* img without title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Background images
              </p>
              <Uploder />
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movie/77.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            {/* image with title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image with Title
              </p>
              <Uploder />
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movie/77.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <Message
            label="Movie Description"
            placeholder="Make it short and sweet"
          />
          {/* CATEGORY */}
          <div className="text-sm w-full">
            <Select label="Movie Category" options={CategoriesData} />
          </div>
          {/* MOVIE VIDEO */}

          <div className="flex flex-col gap-2 w-full ">
            <label className="text-border font-semibold text-sm">
              Movie Video
            </label>
            <Uploder />
          </div>
          {/* CASTS */}
          <div className="w-full grid lg:grid-cols-1 gap-6 items-start ">
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4">
              {UsersData.map((user, i) => (
                <div
                  key={i}
                  className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                >
                  <img
                    src={`/images/${user.image ? user.image : "user.png"}`}
                    alt={user.fullName}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p>{user.fullName}</p>
                  <div className="flex-rows mt-2 w-full gap-2">
                    <button className="w-6 h-6 flex-colo bg-dry border border-border text-white rounded">
                      <MdDelete />
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setCast(user);
                        setModalOpen(true);
                      }}
                      className="w-6 h-6 flex-colo bg-dry border border-border text-white rounded"
                    >
                      <FaEdit />
                      Edit
                    </button>
                  </div>
                </div>
              ))}
              <Upload_Cast />
            </div>
          </div>

          {/* SUBMIT */}
          <button className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
            <ImUpload /> Publish Movie
          </button>
        </div>
      </SideBarAdmin>
    </LayoutAdmin>
  );
}

export default AddMovie;
