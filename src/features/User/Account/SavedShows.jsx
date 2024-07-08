import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../../Auth/AuthContext";
import { db } from "../../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { TbHomeHeart } from "react-icons/tb";
import Layout from "../../../Components/Layout";
import SideBar from "./SideBar";
import { Movies } from "../../../Data/MovieData";
import Tables from "../../../Components/layout/components/Table/Tables";
import Titles from "../../../Components/layout/components/Titles";
const SavedShows = ({ movie }) => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <SideBar>
        <div>
          {/* <h2 className="flex text-white font-bold md:text-xl p-4 bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-orange)]">
          <TbHomeHeart />
        SavedShows
        </h2> */}
        {/* bg-gradient-to-r from-[var(--primary-purple)] to-[var(--primary-orange)] */}
          <div className="text-white py-3 rounded-sm">
            {" "}
            <Titles title="Favorites Movies" Icon={TbHomeHeart} />
          </div>
          <div className=" bg-transparent ">
            {/* <div className="relative flex items-center group">
                <MdChevronLeft
                  onClick={slideLeft}
                  className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                  size={40}
                />
                <div
                  id={"slider"}
                  className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                  {movies.map((item) => (
                    <div
                      key={item.id}
                      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 bg-subMain"
                    >
                      <div>
                        <img
                          className="w-full h-auto block flex-btn border border-red-400"
                          src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                          alt={item?.title}
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                          {item?.title}
                        </p>
                        <p
                          onClick={() => deleteShow(item.id)}
                          className="absolute text-gray-300 top-4 right-4"
                        >
                          <AiOutlineClose />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <MdChevronRight
                  onClick={slideRight}
                  className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
                  size={40}
                />
              </div> */}
            <Tables />
          </div>
        </div>
      </SideBar>
    </Layout>
  );
};

export default SavedShows;
