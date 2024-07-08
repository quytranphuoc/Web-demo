// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Movie from "./Movie";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import { BsCollection } from "react-icons/bs";
// import Titles from "../../components/Titles";

// const Row = ({ title, fetchURL, rowID }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios.get(fetchURL).then((response) => {
//       setMovies(response.data.results);
//     });
//   }, [fetchURL]);

//   const slideLeft = () => {
//     var slider = document.getElementById("slider" + rowID);
//     slider.scrollLeft = slider.scrollLeft - 500;
//   };
//   const slideRight = () => 6
//     var slider = document.getElementById("slider" + rowID);
//     slider.scrollLeft = slider.scrollLeft + 500;
//   };

//   return (
//     <>
//       <div className="bg-dry">
//         <h2 className="flex text-base font-bold md:text-xl p-4 text-white">
//           {/* <BsCollection /> {title} */}
//           <Titles title={title} Icon={BsCollection} />
//         </h2>

//         <div className="relative flex items-center group">
//           <MdChevronLeft
//             onClick={slideLeft}
//             className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
//             size={40}
//           />
//           <div
//             id={"slider" + rowID}
//             className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
//           >
//             {movies.map((item, id) => (
//               <Movie key={id} item={item} />
//             ))}
//           </div>
//           <MdChevronRight
//             onClick={slideRight}
//             className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
//             size={40}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Row;
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { BsCollection } from "react-icons/bs";
import Titles from "../../components/Titles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data using axios as before
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  // Slick slider settings
  const sliderSettings = {
    infinite: true,
    slidesToShow: 6, 
    slidesToScroll: 5,
    autoplay: true, 
    autoplaySpeed : 6000,
    speed:5000,
  
  
   

  };

  return (
   <>
     <div className="bg-dry">
      <h2 className="flex text-base font-bold md:text-xl p-4 text-white">
        <Titles title={title} Icon={BsCollection} />
      </h2>

      <div className="w-full ">
        <Slider {...sliderSettings} className="w-full h-full whitespace-nowrap scroll-smooth scrollbar-hide relative  bg-black overflow-hidden">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
   </>
  );
};

export default Row;