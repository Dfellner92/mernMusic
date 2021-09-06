import clienteAxios from "../config/axios";
import { FETCH_SONGS_ERROR, 
    FETCH_SONGS_START, 
    FETCH_SONGS_SUCCESS, 
    DELETE_SONG_START, 
    DELETE_SONG_ERROR, 
    DELETE_SONG_SUCCESS,
    ADD_SONG_START,
    ADD_SONG_ERROR,
    ADD_SONG_SUCCESS } from "../types"


export const fetchSongsStart = () => {
    return {
        type: FETCH_SONGS_START,
    };
};

export const fetchSongsError = () => {
    return {
        type: FETCH_SONGS_ERROR,
    };
};

export const fetchSongsSuccess = (songs) => {
    return {
        type: FETCH_SONGS_SUCCESS,
        payload: songs,
    };
};

export const fetchSongsActions = () => {
    return dispatch => {
        dispatch(fetchSongsStart());
        clienteAxios.get('/songs')
            .then(res => {
                console.log(res);
                dispatch(fetchSongsSuccess(res.data));

            })
            .catch(err => {
                console.log(err);
                dispatch(fetchSongsError);
            })
    };
};

export const deleteSongStart = () => {
    return {
        type: DELETE_SONG_START,
    };
};

export const deleteSongError = () => {
    return {
        type: DELETE_SONG_ERROR,
    };
};

export const deleteSongSuccess = (id) => {
    return {
        type: DELETE_SONG_SUCCESS,
        payload: id,
    };
};

export const deleteSongActions = (id) => {
    return dispatch => {
        dispatch(deleteSongStart());
        clienteAxios.delete(`/songs/${id}`)
            .then(res => {
                console.log(res);
                dispatch(deleteSongSuccess(id));

            })
            .catch(err => {
                console.log(err);
                dispatch(deleteSongError());
            })
    };
};

export const addSongStart = () => {
    return {
        type: ADD_SONG_START,
    };
};

export const addSongError = () => {
    return {
        type: ADD_SONG_ERROR,
    };
};

export const addSongSuccess = (song) => {
    return {
        type: ADD_SONG_SUCCESS,
        payload: song,
    };
};

export const addSongActions = (song) => {
    return dispatch => {
        dispatch(addSongStart());
        clienteAxios.post(`/songs`, song)
            .then(res => {
                console.log(res);
                dispatch(addSongSuccess(song));

            })
            .catch(err => {
                console.log(err);
                dispatch(deleteSongError());
            })
    };
};