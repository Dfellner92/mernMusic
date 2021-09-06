import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_START,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_ERROR,
  EDIT_MOVIE_ERROR,
  EDIT_MOVIE_START,
  EDIT_MOVIE_SUCCESS,
  NEW_MOVIE_START,
  NEW_MOVIE_SUCCESS,
  NEW_MOVIE_ERROR,
  GET_MOVIE_ERROR,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_START,
} from '../types';

const initialState = {
  movies: [],
  error: null,
  loading: false,
  movie: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state,
        loading: true,
        movie: {},
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        error: false,
        movie: {},
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        movies: [],
        loading: false,
        error: true,
        movie: {},
      };

    case DELETE_MOVIE_START:
      return {
        ...state,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case DELETE_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case EDIT_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? (movie = action.payload) : movie
        ),
      };
    case EDIT_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case NEW_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case NEW_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movies: [...state.movies, action.payload],
      };
    case NEW_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_MOVIE_START:
      return {
        ...state,
        error: null,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        error: false,
        movie: action.payload,
      };
    case GET_MOVIE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
