// MoviesPage.jsx
import React, { useState } from "react";
import { Button, Spin } from "antd"; // Import necessary components from antd

import Filters from "../layout/Movies/Filters";
import Layout from "../Layout";
import Movie from "../layout/Movies/Movie"; // Ensure Movie component is correctly imported
import ProductionHouse from "../layout/Movies/ProductionHouse";
import MovieList from "../layout/Movies/MovieList";
import { Movies } from "../../Data/MovieData"; // Adjust path as per your data structure

function MoviesPage() {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (page + maxPage <= filteredMovies.length) {
        setPage(page + maxPage);
      } else {
        setPage(filteredMovies.length);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Layout className="bg-black">
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters setFilteredMovies={setFilteredMovies} />
        <MovieList movies={filteredMovies.slice(0, page)} />
        <ProductionHouse />
        <p className="text-lg font-medium my-6 text-white">
          Total{" "}
          <span className="font-bold text-subMain">
            {filteredMovies.length}
          </span>{" "}
          items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredMovies.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        {!isLoading && page < filteredMovies.length && (
          <div
            className="w-full flex-colo md:my-20 my-10"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Button
              onClick={handleLoadMore}
              className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
            >
              Load More
            </Button>
          </div>
        )}
        {isLoading && (
          <div className="w-full flex items-center justify-center py-12 px-8 gap-3">
            <Spin className="text-subMain text-4xl" />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default MoviesPage;

// import React, { useState, useEffect } from "react";
// import Filters from "../layout/Movies/Filters";
// import Layout from "../Layout";
// import Movie from "../layout/Movies/Movie";
// import { Movies } from "../../Data/MovieData";
// import { CgSpinner } from "react-icons/cg";
// import ProductionHouse from "../layout/Movies/ProductionHouse";
// import MovieList from "../layout/Movies/MovieList";

// function MoviesPage() {
//   const maxPage = 10;
//   const [page, setPage] = useState(maxPage);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLoadMore = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       if (page + maxPage <= Movies.length) {
//         setPage(page + maxPage);
//       } else {
//         setPage(Movies.length);
//       }
//       setIsLoading(false);
//     }, 1500);
//   };

//   return (
//     <Layout className="bg-black">
//       <div className="min-height-screen container mx-auto px-2 my-6">
//         <Filters />
//         <MovieList/>
//         <ProductionHouse />
//         <p className="text-lg font-medium my-6 text-white">
//           Total <span className="font-bold text-subMain">{Movies?.length}</span>{" "}
//           items Found
//         </p>
//         <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
//           {Movies.slice(0, page)?.map((movie, index) => (
//             <Movie key={index} movie={movie} />
//           ))}
//         </div>
//         {/* Loading More */}
//         {!isLoading && page < Movies.length && (
//           <div
//             className="w-full flex-colo md:my-20 my-10"
//             data-aos="fade-up"
//             data-aos-duration="1500"
//           >
//             <button
//               onClick={handleLoadMore}
//               className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
//             >
//               Load More
//             </button>
//           </div>
//         )}
//         {isLoading && (
//           <div className="w-full flex items-center justify-center py-12 px-8 gap-3">
//             <CgSpinner className="animate-spin text-subMain text-4xl" />
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }

// export default MoviesPage;
