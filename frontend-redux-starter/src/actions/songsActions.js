import clienteAxios from "../config/axios";
import { FETCH_SONGS_ERROR, FETCH_SONGS_START, FETCH_SONGS_SUCCESS } from "../types"


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