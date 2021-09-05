import React from 'react';
import { Link } from 'react-router-dom';

const Song = ({ song }) => {
    return (
        <tr>
            <td>{song.title}</td>
            <td>{song.url}</td>
            <td>{song.rating}</td>
            <td>
                <Link to={`/songs/edit/${song.id}`} className="btn btn-outline-info px-4">
                    Edit
                </Link>

                <button className="btn btn-outline-danger ml-2">
                    Delete
                </button>
            </td>
        </tr>
    )
};

export default Song;
