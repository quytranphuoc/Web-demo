import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCasts from "../layout/components/Single/MovieCasts";
import MovieInfo from "../layout/components/Single/MovieInfo";
import MovieRates from "../layout/components/Single/MovieRates";
import Titles from "../layout/components/Titles";
import { Movies } from "../../Data/MovieData";
import Layout from "antd/es/layout/layout";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "../layout/Movies/Movie";
import ShareMovieModal from "../layout/components/Modals/ShareModal";

function SingleMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const RelatedMovies = Movies.filter((m) => m.category === movie.category);
  return (
    <Layout>
      <ShareMovieModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        {/* rate */}
        <MovieRates movie={movie} />
        {/* related */}
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />
          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {RelatedMovies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleMovie;
