import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../../../../features/Auth/AuthContext";
import { db } from "../../../../firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  useEffect(() => {
    if (user?.email) {
      const fetchLikedStatus = async () => {
        const docRef = doc(db, "user", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const likedMovie = data.savedShows?.find(
            (show) => show.id === item.id
          );
          if (likedMovie) {
            setLike(true);
          }
        }
      };
      fetchLikedStatus();
    }
  }, [user, item.id]);

  const movieID = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    // if (user?.email) {
    //   setLike(!like);
    //   setSaved(true);
    //   await updateDoc(movieID, {
    //     savedShows: arrayUnion({
    //       id: item.id,
    //       title: item.title,
    //       img: item.backdrop_path,
    //     }),
    //   });
    // } else {
    //   //
    // }
    if (user?.email) {
      try {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          saveShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      } catch (error) {
        console.error("Error updating document".error);
      }
    } else {
      console.log("User is not authenticated");
    }
  };

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 bg-black">
      <img
        className="w-full h-auto block border border-border p-1 "
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <Link>
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {item?.title}
          </p>
        </Link>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
