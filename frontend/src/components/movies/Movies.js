import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMoviesAction } from '../../actions/moviesActions';
import Spinner from '../spinner/Spinner';
import Movie from './Movie';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = () => dispatch(fetchMoviesAction()); // add actions to fetch the products
    fetchMovies();
  }, [dispatch]);

  const loading = useSelector((state) => state.movies.loading);
  const movies = useSelector((state) => state.movies.movies);
  const error = useSelector((state) => state.movies.error);

  return (
    <>
      {error ? (
        <div className="font-wight-bold alert alert-danger text-center mt-5">
          Something went wrong
        </div>
      ) : null}
      {loading ? <Spinner /> : null}
      <div style={{ margin: '10px' }}>
        <Link className="btn btn-info" to="/movies/new">
          Add Movie
        </Link>
        <h2 className="text-center">Movies</h2>
      </div>
      {/* <h2 className="text-center my-5">Songs</h2> */}
      <table className="table table-striped .table-hover shadow text-center">
        <thead className="bg-info table-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Rating</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
