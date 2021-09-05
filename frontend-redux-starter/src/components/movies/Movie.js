import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import alert from 'sweetalert2';

import { deleteMovieAction } from '../../actions/moviesActions';

const Movie = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDeleteMovie = (id) => {
    alert
      .fire({
        title: 'Delete Movie',
        text: 'The deleted item cannot be recovered!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8e44ad',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete',
      })
      .then((result) => {
        if (result.value) {
          alert.fire(
            'Removed',
            'The item was successfully removed.',
            'success'
          );
          dispatch(deleteMovieAction(id));
        }
      });
  };
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.url}</td>
      <td>{movie.rating}</td>
      <td className="acciones ">
        <Link
          to={`/movies/edit/${movie.id}`}
          className="btn btn-outline-info px-4"
        >
          Edit
        </Link>

        <button
          className="btn btn-outline-danger ml-2"
          onClick={() => handleDeleteMovie(movie.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
export default Movie;
