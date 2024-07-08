import React from "react";
import { Row, Col } from "antd";
import Movie from "./Movie";

function MovieList({ movies }) {
  return (
    <Row gutter={[16, 16]}>
      {movies.map((movie, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Movie movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
