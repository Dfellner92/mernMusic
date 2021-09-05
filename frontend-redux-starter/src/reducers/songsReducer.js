import { FETCH_SONGS_START, FETCH_SONGS_SUCCESS } from "../types";

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
        
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                song: {},
                songs: action.payload,
            };
        
        case FETCH_SONGS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: true,
                song: {},
                songs: [],
            };
        default: 
            return state;
            
    }
}

export default songsReducer;