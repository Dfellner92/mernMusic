import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  editMovieAction,
  getMovieAction,
  newMovieAction,
} from '../../actions/moviesActions';

const MovieForm = ({ history, match }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const movie = useSelector((state) => state.movies.movie);
  const [title, setTitle] = useState('New Movie');

  useEffect(() => {
    if (match.params.id) {
      setTitle('Edit Movie');
      dispatch(getMovieAction(+match.params.id));
    }
  }, [dispatch, match.params.id]);

  const submitNewMovie = (data) => {
    if (match.params.id) {
      dispatch(editMovieAction({ ...data, id: +match.params.id }));
      history.push('/movies');
    } else {
      dispatch(newMovieAction(data));
      history.push('/movies');
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">{title}</h2>
            <form onSubmit={handleSubmit(submitNewMovie)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Movie Title"
                  name="title"
                  ref={register({ required: true })}
                  defaultValue={movie.title}
                />
                {errors.title && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Url</label>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Movie URL"
                  defaultValue={movie.url}
                  name="url"
                  ref={register({ required: true })}
                />
                {errors.url && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <label>Rating</label>
                <input
                  type="number"
                  className="form-control  "
                  placeholder="Movie Rating"
                  defaultValue={movie.rating}
                  name="rating"
                  ref={register({ required: true })}
                />
                {errors.rating && (
                  <div className="font-weight-bold alert alert-danger text-center mt-4">
                    This field is required
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-info rounded-pill font-weight-bold text-uppercase d-block w-100"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieForm;
