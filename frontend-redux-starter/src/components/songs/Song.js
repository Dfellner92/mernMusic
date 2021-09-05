import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSongActions } from '../../actions/songsActions';

const Song = ({ song }) => {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.url}</td>
            <td>{song.rating}</td>
            <td>
                <Link to={`/songs/edit/${song.id}`} className="btn btn-outline-info px-4">
                    Edit
                </Link>

                <button className="btn btn-outline-danger ml-2"
                onClick={() => dispatch(deleteSongActions(song.id))}>
                    Delete
                </button>
            </td>
        </tr>
    )
};

export default Song;
