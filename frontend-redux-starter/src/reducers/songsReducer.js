import { 
    FETCH_SONGS_START, 
    FETCH_SONGS_ERROR, 
    FETCH_SONGS_SUCCESS,  
    DELETE_SONG_START, 
    DELETE_SONG_ERROR, 
    DELETE_SONG_SUCCESS } from "../types";

const initialState = {
    songs: [],
    error: null,
    loading: false,
    song: {},
};

const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SONGS_START:
            return {
                ...state,
                loading: true,
                song: {},
            };
        case FETCH_SONGS_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: true,
                    song: {},
                    songs: [],
            };
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                song: {},
                songs: action.payload,
            };
        
        case DELETE_SONG_START:
            return {
                ...state,
            };
        case DELETE_SONG_ERROR:
            return {
                ...state,
                error: true
            };
        case DELETE_SONG_SUCCESS:
            return {
                ...state,
                error: false,
                songs: state.songs.filter(s => s.id !== action.payload),
            }
        default: 
            return state;
            
    }
}

export default songsReducer;