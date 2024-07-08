import React, { useState } from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../../../features/Auth/AuthContext";
import { db } from "../../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Movie({ movie }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);
  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.img,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };

  return (
    <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
    
      <Card
      hoverable
      cover={<Link to={`/movie/${movie?.title}`}><img alt={movie?.title} src={`/images/movie/${movie?.img}`} /></Link>}
      actions={[
        <Button onClick={saveShow}>
          {like ? <FaHeart /> : <FaRegHeart />}
        </Button>
      ]}
      c
    >
      <Card.Meta title={movie?.title} />
    </Card>
    </div>
  );
}

export default Movie;


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { UserAuth } from "../../../features/Auth/AuthContext";
// import { db } from "../../../firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";
// import MovieCasts from "../components/Single/MovieCasts";
// function Movie({ movie }) {
//   const [like, setLike] = useState(false);
//   const [saved, setSaved] = useState(false);
//   const { user } = UserAuth();

//   const movieID = doc(db, "users", `${user?.email}`);
//   const saveShow = async () => {
//     if (user?.email) {
//       setLike(!like);
//       setSaved(true);
//       await updateDoc(movieID, {
//         savedShows: arrayUnion({
//           id: movie.id,
//           title: movie.title,
//           img: movie.img,
//         }),
//       });
//     } else {
//       alert("Please log in to save a movie");
//     }
//   };
//   return (
//     <>
//       <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
//         <Link to={`/movie/${movie?.title}`} className="w-full">
//           <img
//             src={`/images/movie/${movie?.img}`}
//             alt={movie?.title}
//             className="w-full h-64 object-cover"
//           />
//         </Link>
//         <div className="absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
//           <h4 className="font-semibold truncate ">{movie?.title}</h4>
//           <button
//             className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white"
//             onClick={saveShow}
//           >
//             {like ? <FaHeart /> : <FaRegHeart />}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Movie;
