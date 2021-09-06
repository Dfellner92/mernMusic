import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  movies: moviesReducer,
  songs: songsReducer
});
