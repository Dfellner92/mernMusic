import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { fetchSongsActions } from '../../actions/songsActions';
import Spinner from '../spinner/Spinner';
import Song from './Song';

const Songs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSongsActions())
    }, [dispatch])

    const loading = useSelector(state => state.songs.loading);
    const songs = useSelector(state => state.songs.songs);
    const error = useSelector(state => state.songs.error);

    return (
        <>
        {error ? (
            <div className="font-wight-bold alert alert-danger text-center mt-5">
                Something went wrong
            </div>
        ) : null}
        {loading ? <Spinner /> : null}
        <div style={{margin: '10px'}}>
          <Link className="btn btn-info" to="/songs/new">
            Add Movie
          </Link>
          <h2 className="text-center">Songs</h2>  
        
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
                {songs.map(song => (
                    <Song key={song.id} song={song} />
                ))}
            </tbody>
          </table>
        </div>
        </>
    );
}

export default Songs;