import clienteAxios from '../config/axios';
import {
  DELETE_MOVIE_ERROR,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  EDIT_MOVIE_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  FETCH_MOVIES_SUCCESS,
  GET_MOVIE_ERROR,
  GET_MOVIE_START,
  GET_MOVIE_SUCCESS,
  NEW_MOVIE_ERROR,
  NEW_MOVIE_START,
  NEW_MOVIE_SUCCESS,
  EDIT_MOVIE_START,
} from '../types';

export const fetchMoviesStart = () => {
  return {
    type: FETCH_MOVIES_START,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesError = () => {
  return {
    type: FETCH_MOVIES_ERROR,
  };
};
export function fetchMoviesAction() {
  return (dispatch) => {
    dispatch(fetchMoviesStart());

    clienteAxios
      .get('/movies')
      .then((resp) => {
        dispatch(fetchMoviesSuccess(resp.data));
      })
      .catch((error) => {
        dispatch(fetchMoviesError);
      });
  };
}

export function deleteMovieStart() {
  return {
    type: DELETE_MOVIE_START,
  };
}

export function deleteMovieSuccess(id) {
  return {
    type: DELETE_MOVIE_SUCCESS,
    payload: id,
  };
}

export function deleteMovieError() {
  return {
    type: DELETE_MOVIE_ERROR,
  };
}
export function deleteMovieAction(id) {
  return (dispatch) => {
    dispatch(deleteMovieStart());

    clienteAxios
      .delete(`/movies/${id}`)
      .then(() => {
        dispatch(deleteMovieSuccess(id));
      })
      .catch((error) => {
        // dispatch the delete song
        console.log(error);
        dispatch(deleteMovieError());
      });
  };
}

export function newMovieStart() {
  return {
    type: NEW_MOVIE_START,
  };
}

export function newMovieError() {
  return {
    type: NEW_MOVIE_ERROR,
  };
}

export function newMovieSuccess(movie) {
  return {
    type: NEW_MOVIE_SUCCESS,
    payload: movie,
  };
}

export function newMovieAction(movie) {
  return (dispatch) => {
    dispatch(newMovieStart());

    clienteAxios
      .post('/movies', movie)
      .then((res) => {
        console.log(res);
        dispatch(newMovieSuccess(movie));
      })
      .catch((error) => {
        console.error(error);
        dispatch(newMovieError());
      });
  };
}
export function getMovieStart() {
  return {
    type: GET_MOVIE_START,
  };
}

export function getMovieError() {
  return {
    type: GET_MOVIE_ERROR,
  };
}

export function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movie,
  };
}

export function getMovieAction(id) {
  return (dispatch) => {
    dispatch(getMovieStart());

    clienteAxios
      .get(`/movies/${id}`)
      .then((res) => {
        debugger;
        dispatch(getMovieSuccess(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMovieError());
      });
  };
}

export function editMovieStart() {
  return {
    type: EDIT_MOVIE_START,
  };
}
export function editMovieError() {
  return {
    type: EDIT_MOVIE_SUCCESS,
  };
}

export function editMovieSuccess(movie) {
  return {
    type: EDIT_MOVIE_SUCCESS,
    payload: movie,
  };
}

export function editMovieAction(movie) {
  return (dispatch) => {
    dispatch(editMovieStart());

    clienteAxios
      .put(`/movies/${movie.id}`, movie)
      .then((res) => {
        dispatch(editMovieSuccess(res.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(editMovieError());
      });
  };
}
